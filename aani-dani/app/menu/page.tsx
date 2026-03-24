import { getFullMenu } from '../lib/menuData';
import MenuCategoryCard from '../components/MenuCategoryCard';
import Image from 'next/image';
import { menuPosters } from '../lib/mediaMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu — AANI & DANI | Restaurant & Café Tanger',
  description: 'Explore our full menu: breakfast, crêpes, burgers, pizza, pasta, fresh juices, cocktails and more. Prices in DH.',
};

export default function MenuPage() {
  const menuSections = getFullMenu();

  return (
    <div className="menu-page">
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="menu-hero__bg">
          <Image
            src="/images/menu-posters/fast-food-snack-menu.jpg"
            alt="Our Menu"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={80}
          />
          <div className="menu-hero__overlay" />
        </div>
        <div className="menu-hero__content">
          <h1 className="menu-hero__title">Our Menu</h1>
          <p className="menu-hero__subtitle">Fresh ingredients, exceptional flavors</p>
        </div>
      </section>

      {/* Menu Poster Gallery */}
      <section className="section menu-posters-section">
        <div className="container">
          <div className="menu-posters-grid">
            {menuPosters.map((poster, idx) => (
              <div key={idx} className="menu-poster-card">
                <Image
                  src={poster.src}
                  alt={poster.category}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="menu-poster-card__label">
                  <span>{poster.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu */}
      <section className="section">
        <div className="container">
          {menuSections.map((section, sIdx) => (
            <div key={sIdx} className="menu-section">
              <h2 className="menu-section__title">{section.title}</h2>
              <div className="menu-section__grid">
                {section.categories.map((cat, cIdx) => (
                  <MenuCategoryCard key={cIdx} category={cat} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
