import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <Image
          src="/images/space/tagline-banner.jpg"
          alt="AANI & DANI Restaurant"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__logo-wrapper">
          <Image
            src="/images/about/logo-transparent.png"
            alt="AANI & DANI Logo"
            width={120}
            height={120}
            priority
            className="hero__logo"
          />
        </div>

        <h1 className="hero__title">AANI & DANI</h1>
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
