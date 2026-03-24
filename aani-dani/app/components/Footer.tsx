import Image from 'next/image';
import Link from 'next/link';
import { restaurantInfo } from '../lib/restaurantInfo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Image
            src="/images/about/logo-transparent.png"
            alt="AANI & DANI"
            width={56}
            height={56}
            loading="lazy"
            className="footer__logo"
          />
          <span className="footer__name">{restaurantInfo.name}</span>
          <p className="footer__tagline">{restaurantInfo.tagline}</p>
        </div>

        <div className="footer__info">
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <a href={`tel:${restaurantInfo.phoneIntl}`} className="footer__link">
              {restaurantInfo.phone}
            </a>
            <p className="footer__text">{restaurantInfo.address}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Hours</h4>
            <p className="footer__text">{restaurantInfo.hours.display}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__social">
              <a href={restaurantInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Instagram">
                Instagram
              </a>
              <a href={restaurantInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="Facebook">
                Facebook
              </a>
              <a href={restaurantInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="footer__link" aria-label="WhatsApp">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer__nav">
          <Link href="/" className="footer__link">Home</Link>
          <Link href="/menu" className="footer__link">Menu</Link>
          <Link href="/contact" className="footer__link">Contact</Link>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
