import HeroSection from './components/HeroSection';
import FoodCard from './components/FoodCard';
import MenuCategoryCard from './components/MenuCategoryCard';
import SpaceSection from './components/SpaceSection';
import { featuredFoodImages } from './lib/mediaMap';
import { getFullMenu } from './lib/menuData';
import Carousel3D from './components/Carousel3D';
import Link from 'next/link';

export default function Home() {
  const menuSections = getFullMenu();

  return (
    <>
      <HeroSection />

      {/* Full Menu immediately after Hero for QR scanner accessibility */}
      <section className="section section--warm" id="menu" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background image */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'rotate(-15deg)',
          width: '500px',
          height: '500px',
          backgroundImage: 'url(/images/food/pasticcio.jpg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'rotate(15deg)',
          width: '400px',
          height: '400px',
          backgroundImage: 'url(/images/food/cheese-burger.jpg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            Fresh ingredients, exceptional flavors
          </p>
          
          <div className="menu-scroll-container">
            {menuSections.map((section, sIdx) => (
              <div key={sIdx} className="menu-section">
                <h3 className="menu-section__title">{section.title}</h3>
                <div className="menu-section__grid">
                  {section.categories.map((cat, cIdx) => (
                    <MenuCategoryCard key={cIdx} category={cat} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Food Gallery - 3D Carousel Cylinder */}
      <section className="section section--dark" id="gallery" style={{ padding: 0 }}>
        <Carousel3D 
          title="Best Sellers"
          items={featuredFoodImages.map((img, i) => ({
             id: `featured-${i}`,
             title: img.alt.substring(0, 15), // Keep milestone title short
             fullName: img.alt, // Full name for exact menu searching
             src: img.src,
             alt: img.alt
          }))}
        />
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
