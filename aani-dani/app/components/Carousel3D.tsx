'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  fullName?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  title?: string;
  autoPlayInterval?: number;
}

export default function Carousel3D({ items, title = "Best Sellers", autoPlayInterval = 10000 }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const goToIndex = useCallback((index: number) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = items.length - 1; // Wrap around for infinite scroll feel
    if (newIndex >= items.length) newIndex = 0; // Wrap around for infinite scroll feel
    setActiveIndex(newIndex);
  }, [items.length]);

  // Auto-play interval
  useEffect(() => {
    if (isHovered || isDraggingRef.current) return;
    
    const timer = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, autoPlayInterval);
    
    return () => clearInterval(timer);
  }, [activeIndex, autoPlayInterval, isHovered, goToIndex]);

  // Drag and swipe handlers
  const handleDragStart = (x: number) => {
    startXRef.current = x;
    isDraggingRef.current = true;
  };

  const handleDragMove = (x: number) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const diff = startXRef.current - x;
    
    if (Math.abs(diff) > 50) { // Drag threshold
      if (diff > 0) {
        goToIndex(activeIndex + 1);
      } else {
        goToIndex(activeIndex - 1);
      }
      startXRef.current = x; // Reset origin after triggered to prevent skipping multiple
      isDraggingRef.current = false;
    }
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  // Interaction logic to scroll up to the menu list
  const handleItemClick = (index: number, itemTitle: string, fullName?: string) => {
    if (index === activeIndex) {
      // Only scroll when clicking the active center image
      const elements = Array.from(document.querySelectorAll('.menu-item__name'));
      const searchName = fullName || itemTitle;
      const target = elements.find(
        (el) => el.textContent?.trim().toLowerCase() === searchName.trim().toLowerCase()
      );
      
      if (target) {
        const menuItemWrapper = target.closest('.menu-item');
        if (menuItemWrapper) {
          // Scroll item to center of viewport
          menuItemWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Trigger CSS highlight animation
          menuItemWrapper.classList.add('highlight-pulse');
          setTimeout(() => {
            menuItemWrapper.classList.remove('highlight-pulse');
          }, 5000); // 5 seconds highlight as requested
          return;
        }
      }
      // If item not matched or found in menu, scroll smoothly to the Menu top section
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If clicking an inactive side image, bring it to center
      goToIndex(index);
    }
  };

  return (
    <div 
      className="carousel-3d-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Navigation Pill */}
      <div className="carousel-3d-nav-pill">
        <span>{title}</span>
      </div>

      {/* 3D Stage with mouse/touch drag bindings */}
      <div 
        className="carousel-3d-stage"
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="carousel-3d-track">
          {items.map((item, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            
            // Mathematics for the wrapping fisheye curve
            const rotateY = offset * -35; 
            const translateZ = absOffset * -150; 
            const scale = 1 - (absOffset * 0.1);
            const opacity = 1 - (absOffset * 0.2);
            const zIndex = 100 - absOffset;

            return (
              <div 
                key={item.id}
                className={`carousel-3d-item ${index === activeIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${offset * 120}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: Math.max(opacity, 0),
                  zIndex
                }}
                onClick={() => handleItemClick(index, item.title, item.fullName)}
                onDragStart={(e) => e.preventDefault()} // Prevent browser default ghost image grabbing
              >
                <div className="carousel-3d-image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 80vw, 400px"
                    draggable={false}
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
          aria-label="Previous item"
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
          aria-label="Next item"
        >
          →
        </button>
      </div>
    </div>
  );
}
