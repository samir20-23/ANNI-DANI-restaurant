import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Elegant dark gradient background for premium restaurant feel */}
      <div className="hero__gradient-bg">
        <div className="hero__gradient-accent" />
      </div>

      <div className="hero__content">
        <div className="hero__logo-wrapper">
          <Image
            src="/images/about/logo-transparent.png"
            alt="AANI & DANI Logo"
            width={230}
            height={230}
            priority
            className="hero__logo"
          />
        </div>
 
        <p className="hero__tagline">
          Where the beauty of nature meets the flavors of AANI&nbsp;&&nbsp;DANI
        </p>

        <div className="hero__actions">
          <Link href="/menu" className="btn btn--primary">
            See Menu
          </Link>
          <Link href="/contact" className="btn btn--outline">
            Visit Us
          </Link>
        </div>
      </div>
    </section>
  );
}