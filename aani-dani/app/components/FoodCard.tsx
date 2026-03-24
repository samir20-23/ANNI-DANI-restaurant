import Image from 'next/image';

interface FoodCardProps {
  src: string;
  alt: string;
  price?: number | null;
}

export default function FoodCard({ src, alt, price }: FoodCardProps) {
  return (
    <div className="food-card">
      <div className="food-card__image-wrapper">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div className="food-card__gradient" />
      </div>
      <div className="food-card__info">
        <span className="food-card__name">{alt}</span>
        {price && (
          <span className="food-card__price">{price} DH</span>
        )}
      </div>
    </div>
  );
}
