import HeroSection from './components/HeroSection';
import FoodCard from './components/FoodCard';
import MenuCategoryCard from './components/MenuCategoryCard';
import SpaceSection from './components/SpaceSection';
import { featuredFoodImages } from './lib/mediaMap';
import { getMenuPreview } from './lib/menuData';
import Link from 'next/link';

export default function Home() {
  const menuPreview = getMenuPreview();

  return (
    <>
      <HeroSection />

      {/* Featured Food Gallery */}
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">
            Crafted with fresh ingredients and passion
          </p>
          <div className="food-grid">
            {featuredFoodImages.map((food, idx) => (
              <FoodCard key={idx} src={food.src} alt={food.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section section--warm" id="menu-preview">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            A taste of what we offer — from breakfast to dessert
          </p>
          <div className="menu-preview-grid">
            {menuPreview.map((cat, idx) => (
              <MenuCategoryCard key={idx} category={cat} compact />
            ))}
          </div>
          <div className="section__cta">
            <Link href="/menu" className="btn btn--primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Space & Vibe */}
      <SpaceSection />

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__title">Come Visit Us</h2>
          <p className="cta-banner__text">
            City center, Food court, Tanger 90000
          </p>
          <div className="cta-banner__actions">
            <Link href="/menu" className="btn btn--primary">See Menu</Link>
            <Link href="/contact" className="btn btn--outline-light">Get Directions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
