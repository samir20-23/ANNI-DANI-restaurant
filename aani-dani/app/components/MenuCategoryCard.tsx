import { MenuCategory } from '../lib/menuData';

interface MenuCategoryCardProps {
  category: MenuCategory;
  compact?: boolean;
}

export default function MenuCategoryCard({ category, compact = false }: MenuCategoryCardProps) {
  const items = compact ? category.items.slice(0, 4) : category.items;

  return (
    <div className="menu-category">
      <h3 className="menu-category__title">{category.category}</h3>
      <div className="menu-category__items">
        {items.map((item, idx) => (
          <div key={idx} className="menu-item">
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
        ))}
      </div>
      {compact && category.items.length > 4 && (
        <p className="menu-category__more">+{category.items.length - 4} more items</p>
      )}
    </div>
  );
}
