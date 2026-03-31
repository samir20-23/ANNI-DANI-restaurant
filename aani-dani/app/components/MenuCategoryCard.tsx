import { MenuCategory } from '../lib/menuData';
import { foodImages } from '../lib/mediaMap';

interface MenuCategoryCardProps {
  category: MenuCategory;
  compact?: boolean;
}

export default function MenuCategoryCard({ category, compact = false }: MenuCategoryCardProps) {
  const items = compact ? (category.items || []).slice(0, 4) : (category.items || []);

  // Pick an image deterministically based on category name length so each looks slightly unique
  const bgImage = foodImages[category.category.length % foodImages.length].src;

  return (
    <div className="menu-category" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Watermark Image */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '250px',
          height: '250px',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1, // Extremely subtle so it doesn't hide text
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'rotate(-10deg)',
          borderRadius: '20px',
          filter: 'grayscale(50%)' // softens the image colors further
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 className="menu-category__title">{category.category}</h3>
        
        {category.subCategories ? (
          <div className="menu-subcategories">
            {category.subCategories.map((sub, sIdx) => (
              <div key={sIdx} className="menu-subcategory">
                <h4 className="menu-subcategory__title">{sub.category}</h4>
                <div className="menu-category__items">
                  {(sub.items || []).map((item, idx) => (
                    <MenuCategoryItem key={idx} item={item} compact={compact} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-category__items">
            {items.map((item, idx) => (
              <MenuCategoryItem key={idx} item={item} compact={compact} />
            ))}
          </div>
        )}

        {compact && category.items && category.items.length > 4 && (
          <p className="menu-category__more">+{category.items.length - 4} more items</p>
        )}
      </div>
    </div>
  );
}

function MenuCategoryItem({ item, compact }: { item: any; compact: boolean }) {
  return (
    <div className="menu-item">
      <div className="menu-item__header">
        <span className="menu-item__name">{item.name}</span>
        <span className="menu-item__dots" />
        <span className="menu-item__price">
          {item.price ? `${item.price} DH` : 'Ask in-store'}
        </span>
      </div>
      {item.description && !compact && (
        <p className="menu-item__desc">{item.description}</p>
      )}
    </div>
  );
}
