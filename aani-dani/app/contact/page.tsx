import Image from 'next/image';
import { restaurantInfo } from '../lib/restaurantInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location — AANI & DANI | Tanger',
  description: 'Find us in the heart of Tangier. Contact AANI & DANI restaurant — phone, address, hours and directions.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <Image
            src="/images/space/exterior.jpg"
            alt="AANI & DANI Exterior"
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={80}
          />
          <div className="contact-hero__overlay" />
        </div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Visit Us</h1>
          <p className="contact-hero__subtitle">We&apos;d love to welcome you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="contact-card">
                <h3 className="contact-card__title">Address</h3>
                <p className="contact-card__text">{restaurantInfo.address}</p>
                <a
                  href={restaurantInfo.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  Get Directions →
                </a>
              </div>

              <div className="contact-card">
                <h3 className="contact-card__title">Phone</h3>
                <a href={`tel:${restaurantInfo.phoneIntl}`} className="contact-card__phone">
                  {restaurantInfo.phone}
                </a>
                <a
                  href={restaurantInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  Message on WhatsApp →
                </a>
              </div>

              <div className="contact-card">
                <h3 className="contact-card__title">Opening Hours</h3>
                <div className="contact-card__hours">
                  <div className="hours-row">
                    <span>Monday – Friday</span>
                    <span>{restaurantInfo.hours.weekdays}</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday – Sunday</span>
                    <span>{restaurantInfo.hours.weekend}</span>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-card__title">Follow Us</h3>
                <div className="contact-social">
                  <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="social-btn">
                    Instagram
                  </a>
                  <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="social-btn">
                    Facebook
                  </a>
                  <a href={restaurantInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                src={restaurantInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AANI & DANI Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
