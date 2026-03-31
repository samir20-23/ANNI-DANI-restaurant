// Unified menu data layer that merges all JSON sources
// Handles two different JSON schemas and deduplicates items

export interface MenuItem {
  name: string;
  price: number | null;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items?: MenuItem[];
  subCategories?: MenuCategory[];
  sourceImage?: string;
}

export interface MenuSection {
  title: string;
  categories: MenuCategory[];
}

import fs from 'fs';
import path from 'path';

// --- Paths to JSON files ---
const dataMenuDir = path.join(process.cwd(), 'public/data/data_menu');
// const menuInWebsitDir = path.join(process.cwd(), 'public/data/MenuInWebsit');

const breakfastData = JSON.parse(fs.readFileSync(path.join(dataMenuDir, 'breakfast-omelette-menu.json'), 'utf-8'));
const dessertData = JSON.parse(fs.readFileSync(path.join(dataMenuDir, 'dessert-pastry-bakery-menu.json'), 'utf-8'));
const drinksData = JSON.parse(fs.readFileSync(path.join(dataMenuDir, 'drinks-beverages-menu.json'), 'utf-8'));
const fastFoodData = JSON.parse(fs.readFileSync(path.join(dataMenuDir, 'fast-food-snack-menu.json'), 'utf-8'));

// const crepesViennoiseriesData = JSON.parse(fs.readFileSync(path.join(menuInWebsitDir, 'les-crepes-et-les-viennoiseries.json'), 'utf-8'));
// const jusBoissonsData = JSON.parse(fs.readFileSync(path.join(menuInWebsitDir, 'les-jus-et-les-boissons-et-froides.json'), 'utf-8'));
// const petitsDejeunersData = JSON.parse(fs.readFileSync(path.join(menuInWebsitDir, 'les-petits-dejeuners.json'), 'utf-8'));

function normalizeCategoryName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function normalizeItemName(name: string): string {
  return name.trim().replace(/\s+/g, ' ');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseSchema1(data: any): MenuCategory[] {
  if (!data.categories || !Array.isArray(data.categories)) return [];
  
  return data.categories.map((cat: any) => {
    const category: MenuCategory = {
      category: normalizeCategoryName(cat.category),
      sourceImage: data.source_image || undefined,
    };

    if (cat.sub_categories && Array.isArray(cat.sub_categories)) {
      category.subCategories = cat.sub_categories.map((sub: any) => ({
        category: normalizeCategoryName(sub.category),
        items: (sub.items || []).map((item: any) => ({
          name: normalizeItemName(item.name),
          price: item.price ?? null,
          description: item.description || undefined,
        })),
      }));
    } else {
      category.items = (cat.items || []).map((item: any) => ({
        name: normalizeItemName(item.name),
        price: item.price ?? null,
        description: item.description || undefined,
      }));
    }

    return category;
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseSchema2(data: any): MenuCategory[] {
  if (!data.items || typeof data.items !== 'object') return [];
  const categories: MenuCategory[] = [];

  for (const [key, items] of Object.entries(data.items)) {
    if (!Array.isArray(items)) continue;
    categories.push({
      category: normalizeCategoryName(key),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: items.map((item: any) => ({
        name: normalizeItemName(item.name),
        price: item.price ?? null,
        description: item.description || undefined,
      })),
    });
  }

  return categories;
}

function deduplicateItems(items: MenuItem[]): MenuItem[] {
  const seen = new Map<string, MenuItem>();
  for (const item of items) {
    const key = item.name.toLowerCase();
    const existing = seen.get(key);
    if (!existing) {
      seen.set(key, item);
    } else {
      // Keep the one with more info (description, higher price = likely more current)
      if (item.description && !existing.description) {
        seen.set(key, item);
      } else if (item.price && (!existing.price || item.price > existing.price)) {
        seen.set(key, { ...item, description: item.description || existing.description });
      }
    }
  }
  return Array.from(seen.values());
}

function getAllCategories(): MenuCategory[] {
  // Parse schema 1 files
  const schema1Categories = [
    ...parseSchema1(breakfastData),
    ...parseSchema1(dessertData),
    ...parseSchema1(drinksData),
    ...parseSchema1(fastFoodData),
  ];

  // Schema 2 files (commented out as V2 is now the source of truth)
  const schema2Categories: MenuCategory[] = [];
  /*
  [
    ...parseSchema2(crepesViennoiseriesData),
    ...parseSchema2(jusBoissonsData),
    ...parseSchema2(petitsDejeunersData),
  ];
  */

  // Merge: group by normalized category name, deduplicate items
  const merged = new Map<string, MenuCategory>();

  for (const cat of [...schema1Categories, ...schema2Categories]) {
    const key = cat.category.toLowerCase();
    if (merged.has(key)) {
      const existing = merged.get(key)!;
      if (cat.subCategories) {
        existing.subCategories = [...(existing.subCategories || []), ...cat.subCategories];
      }
      if (cat.items) {
        existing.items = deduplicateItems([...(existing.items || []), ...cat.items]);
      }
      if (!existing.sourceImage && cat.sourceImage) {
        existing.sourceImage = cat.sourceImage;
      }
    } else {
      merged.set(key, { ...cat, items: deduplicateItems(cat.items) });
    }
  }

  return Array.from(merged.values());
}

// Organized menu sections for display
const sectionOrder: { title: string; categoryPatterns: string[] }[] = [
  {
    title: "Petits Déjeuners",
    categoryPatterns: ["petits déjeuners", "menus complets", "a la carte", "croques", "omelettes", "extras"]
  },
  {
    title: "Crêpes & Viennoiseries",
    categoryPatterns: ["crepe", "crêpe", "pancake", "gaufre", "waffle", "viennoiserie", "duo fondant", "specialites", "cakes"]
  },
  {
    title: "Fast Food & Snacks",
    categoryPatterns: ["burger", "tacos", "durum", "panini", "pizza", "pasticcio", "kapsalon"]
  },
  {
    title: "Pâtes & Plats",
    categoryPatterns: ["pate", "pâte", "plat", "salade"]
  },
  {
    title: "Tartelettes & Pâtisserie",
    categoryPatterns: ["tartelette", "patisserie", "tarte"]
  },
  {
    title: "Boissons & Jus",
    categoryPatterns: ["café", "cafe", "illy", "nespresso", "thé", "the", "frappé", "frappe", "milkshake", "mojito", "jus", "cocktail", "smoothie", "ice coffee", "ice ", "boisson", "gazeuse"]
  }
];

export function getFullMenu(): MenuSection[] {
  const allCategories = getAllCategories();
  const usedCategories = new Set<string>();
  const sections: MenuSection[] = [];

  for (const section of sectionOrder) {
    const matching = allCategories.filter(cat => {
      const catLower = cat.category.toLowerCase();
      return section.categoryPatterns.some(pattern =>
        catLower.includes(pattern.toLowerCase())
      ) && !usedCategories.has(catLower);
    });

    if (matching.length > 0) {
      matching.forEach(m => usedCategories.add(m.category.toLowerCase()));
      sections.push({
        title: section.title,
        categories: matching,
      });
    }
  }

  // Add any uncategorized
  const remaining = allCategories.filter(
    cat => !usedCategories.has(cat.category.toLowerCase())
  );
  if (remaining.length > 0) {
    sections.push({
      title: "Autres",
      categories: remaining,
    });
  }

  return sections;
}

export function getMenuPreview(): MenuCategory[] {
  const allCategories = getAllCategories();
  // Pick 6 diverse categories with max 4 items each for preview
  const previewCategories = [
    'burger', 'pizza', 'crepe', 'café', 'jus', 'petits déjeuners'
  ];

  const preview: MenuCategory[] = [];
  for (const pattern of previewCategories) {
    const match = allCategories.find(
      cat => cat.category.toLowerCase().includes(pattern) && !preview.find(p => p.category === cat.category)
    );
    if (match && match.items) {
      preview.push({
        ...match,
        items: match.items.slice(0, 4),
      });
    }
    if (preview.length >= 6) break;
  }

  return preview;
}

export function getTotalItemCount(): number {
  return getAllCategories().reduce((sum, cat) => {
    const directItems = cat.items?.length || 0;
    const subItems = cat.subCategories?.reduce((s, sub) => s + (sub.items?.length || 0), 0) || 0;
    return sum + directItems + subItems;
  }, 0);
}

export function getTotalCategoryCount(): number {
  return getAllCategories().length;
}
