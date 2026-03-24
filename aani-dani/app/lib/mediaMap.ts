export interface MediaItem {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export const foodImages: MediaItem[] = [
  { src: '/images/food/cheese-burger.jpg', alt: 'Cheese Burger', type: 'image' },
  { src: '/images/food/crepe-nutella.jpg', alt: 'Crêpe Nutella', type: 'image' },
  { src: '/images/food/pizza-fruits-de-mer.jpg', alt: 'Pizza Fruits de Mer', type: 'image' },
  { src: '/images/food/spaghetti-bolognaise.jpg', alt: 'Spaghetti Bolognaise', type: 'image' },
  { src: '/images/food/filet-de-boeuf.jpg', alt: 'Filet de Boeuf', type: 'image' },
  { src: '/images/food/salade-cesar.jpg', alt: 'Salade César', type: 'image' },
  { src: '/images/food/frappe-caramel.jpg', alt: 'Frappé Caramel', type: 'image' },
  { src: '/images/food/jus-cocktail-pina-colada.jpg', alt: 'Cocktail Piña Colada', type: 'image' },
  { src: '/images/food/chicken-crepe.jpg', alt: 'Crêpe au Poulet', type: 'image' },
  { src: '/images/food/durum-poulet.jpg', alt: 'Durum Poulet', type: 'image' },
  { src: '/images/food/tartelettes.jpg', alt: 'Tartelettes', type: 'image' },
  { src: '/images/food/pasticcio.jpg', alt: 'Pasticcio', type: 'image' },
];

export const featuredFoodImages = foodImages.slice(0, 8);

export const allFoodImages: MediaItem[] = [
  ...foodImages,
  { src: '/images/food/cheese-cake.jpg', alt: 'Cheese Cake', type: 'image' },
  { src: '/images/food/chocolate-craving.jpg', alt: 'Chocolat Gourmand', type: 'image' },
  { src: '/images/food/crepe-nutella-2.jpg', alt: 'Crêpe Nutella', type: 'image' },
  { src: '/images/food/icecream.jpg', alt: 'Glace', type: 'image' },
  { src: '/images/food/jus-ananas.jpg', alt: 'Jus d\'Ananas', type: 'image' },
  { src: '/images/food/jus-banane.jpg', alt: 'Jus Banane', type: 'image' },
  { src: '/images/food/jus-cocktail.jpg', alt: 'Cocktail', type: 'image' },
  { src: '/images/food/jus-mojito-classic.jpg', alt: 'Mojito Classic', type: 'image' },
  { src: '/images/food/jus-orange.jpg', alt: 'Jus d\'Orange', type: 'image' },
  { src: '/images/food/jus.jpg', alt: 'Jus Frais', type: 'image' },
  { src: '/images/food/jus-2.jpg', alt: 'Jus Frais', type: 'image' },
  { src: '/images/food/jus-3.jpg', alt: 'Jus Frais', type: 'image' },
  { src: '/images/food/panini-fromage-jambon.jpg', alt: 'Panini Fromage Jambon', type: 'image' },
  { src: '/images/food/pizza-4-fromages.jpg', alt: 'Pizza 4 Fromages', type: 'image' },
  { src: '/images/food/spaghetti-alfredo.jpg', alt: 'Spaghetti Alfredo', type: 'image' },
  { src: '/images/food/special-dish.jpg', alt: 'Plat Spécial', type: 'image' },
];

export const spaceImages: MediaItem[] = [
  { src: '/images/space/center-space.png', alt: 'Espace Central', type: 'image' },
  { src: '/images/space/view-space.png', alt: 'Vue du Restaurant', type: 'image' },
  { src: '/images/space/kitchen.jpg', alt: 'Notre Cuisine', type: 'image' },
  { src: '/images/space/exterior.jpg', alt: 'Façade du Restaurant', type: 'image' },
  { src: '/images/space/happy-birthday.png', alt: 'Événements Privés', type: 'image' },
  { src: '/images/space/tagline-banner.jpg', alt: 'AANI & DANI', type: 'image' },
];

export const spaceVideos: MediaItem[] = [
  { src: '/images/space/events-vibes.mp4', alt: 'Ambiance et Événements', type: 'video' },
  { src: '/images/space/soiree-musicale.mp4', alt: 'Soirée Musicale', type: 'video' },
  { src: '/images/space/kitchen-video.mp4', alt: 'En Cuisine', type: 'video' },
];

export const menuPosters = [
  { src: '/images/menu-posters/breakfast-omelette-menu.jpg', category: 'Breakfast & Omelettes' },
  { src: '/images/menu-posters/dessert-pastry-bakery-menu.jpg', category: 'Desserts & Pâtisserie' },
  { src: '/images/menu-posters/drinks-beverages-menu.jpg', category: 'Drinks & Beverages' },
  { src: '/images/menu-posters/fast-food-snack-menu.jpg', category: 'Fast Food & Snacks' },
];
