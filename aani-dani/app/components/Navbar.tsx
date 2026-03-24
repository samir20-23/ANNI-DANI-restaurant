'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <Image
            src="/images/about/logo-transparent.png"
            alt="AANI & DANI"
            width={72}
            height={72}
            priority
          />
        </Link>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <Link href="/" className="navbar__link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/menu" className="navbar__link" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/contact" className="navbar__link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`} />
        </button>
      </div>

      {isOpen && <div className="navbar__overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
