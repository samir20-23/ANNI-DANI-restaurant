import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: 'url(/images/space/tagline-banner.jpg)' }}
    >
      <div className="hero__overlay" />

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

        <h1 className="sr-only">AANI & DANI</h1>
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