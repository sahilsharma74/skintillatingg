'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  showGoldLine?: boolean;
  goldLinePosition?: 'top' | 'bottom';
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  showGoldLine = false,
  goldLinePosition = 'top',
  threshold = 0.15,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -24px, 0)';
      case 'left':
        return 'translate3d(24px, 0, 0)';
      case 'right':
        return 'translate3d(-24px, 0, 0)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {showGoldLine && goldLinePosition === 'top' && (
        <div className="mb-4 overflow-hidden">
          <div
            className={`h-[1px] bg-gradient-to-r from-[#C9A227]/80 via-[#F5F5DC]/40 to-transparent ${
              isVisible ? 'animate-gold-line' : 'w-0 opacity-0'
            }`}
          />
        </div>
      )}

      {children}

      {showGoldLine && goldLinePosition === 'bottom' && (
        <div className="mt-4 overflow-hidden">
          <div
            className={`h-[1px] bg-gradient-to-r from-[#C9A227]/80 via-[#F5F5DC]/40 to-transparent ${
              isVisible ? 'animate-gold-line' : 'w-0 opacity-0'
            }`}
          />
        </div>
      )}
    </div>
  );
}
