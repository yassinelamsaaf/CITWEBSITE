import { useState, useEffect, useRef } from 'react';

// Animation utilities for enhanced user experience

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Simple scroll animation hook with instant fade
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -1% 0px' // Trigger when 90% is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [elementRef, isVisible];
};

// Simple fade animation component wrapper
export const AnimateOnScroll = ({ children, animation = 'fadeIn', delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    slideInDown: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 }
    },
    glitchIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeIn;
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${className}`}
      style={{
        opacity: isVisible ? selectedAnimation.animate.opacity : selectedAnimation.initial.opacity,
        transform: `translateY(${isVisible ? selectedAnimation.animate.y || 0 : selectedAnimation.initial.y || 0}px) translateX(${isVisible ? selectedAnimation.animate.x || 0 : selectedAnimation.initial.x || 0}px) scale(${isVisible ? selectedAnimation.animate.scale || 1 : selectedAnimation.initial.scale || 1})`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
