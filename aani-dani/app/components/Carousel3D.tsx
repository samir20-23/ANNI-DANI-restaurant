'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: string;
  src: string;
  alt: string;
  title: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  title?: string;
}

export default function Carousel3D({ items, title = "Floating Navigation" }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle snapping via scroll if we want, or just buttons.
  // We'll use buttons and drag-like interaction.
  const goToIndex = (index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= items.length) newIndex = items.length - 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-3d-wrapper">
      {/* Floating Navigation Pill */}
      <div className="carousel-3d-nav-pill">
        <span>{title}</span>
      </div>

      {/* 3D Stage */}
      <div className="carousel-3d-stage">
        <div className="carousel-3d-track">
          {items.map((item, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            
            // Math for fisheye wrap
            // center is 0
            // distance increases -> curve away
            const rotateY = offset * -35; // degrees
            const translateZ = absOffset * -150; // px
            const scale = 1 - (absOffset * 0.1);
            const opacity = 1 - (absOffset * 0.2);
            const zIndex = 100 - absOffset;

            // Hover effects handled via CSS
            
            return (
              <div 
                key={item.id}
                className={`carousel-3d-item ${index === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${offset * 120}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: Math.max(opacity, 0),
                  zIndex
                }}
                onClick={() => goToIndex(index)}
              >
                <div className="carousel-3d-image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 80vw, 400px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Static Data Layer & Controls */}
      <div className="carousel-3d-data">
        <button 
          className="carousel-btn" 
          onClick={() => goToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          ←
        </button>
        
        <div className="carousel-3d-milestones">
          {items.map((item, index) => (
            <div 
              key={`nav-${item.id}`} 
              className={`milestone ${index === activeIndex ? 'active' : ''}`}
            >
              <span className="milestone-num">#{String(index + 1).padStart(2, '0')}</span>
              <span className="milestone-title">{item.title}</span>
            </div>
          ))}
        </div>

        <button 
          className="carousel-btn" 
          onClick={() => goToIndex(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
