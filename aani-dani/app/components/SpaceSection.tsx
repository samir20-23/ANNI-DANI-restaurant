import Image from 'next/image';
import { spaceImages, spaceVideos } from '../lib/mediaMap';

export default function SpaceSection() {
  return (
    <section className="space-section" id="space">
      <div className="container">
        <h2 className="section-title">Our Space</h2>
        <p className="section-subtitle">
          A warm and inviting atmosphere, crafted for unforgettable moments
        </p>

        <div className="space-grid">
          {spaceImages.slice(0, 4).map((img, idx) => (
            <div key={idx} className={`space-grid__item ${idx === 0 ? 'space-grid__item--large' : ''}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="space-grid__text-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {spaceVideos.length > 0 && (
          <div className="space-videos">
            {spaceVideos.slice(0, 2).map((vid, idx) => (
              <div key={idx} className="space-video">
                <video
                  src={vid.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="space-video__player"
                />
                <span className="space-video__label">{vid.alt}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
