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

// Enhanced scroll animation hook
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [elementRef, isVisible];
};

// Animation component wrapper
export const AnimateOnScroll = ({ children, animation = 'fadeInUp', delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 50, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    slideInDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? selectedAnimation.animate.opacity : selectedAnimation.initial.opacity,
        transform: isVisible 
          ? `translateY(${selectedAnimation.animate.y || 0}px) translateX(${selectedAnimation.animate.x || 0}px) scale(${selectedAnimation.animate.scale || 1})`
          : `translateY(${selectedAnimation.initial.y || 0}px) translateX(${selectedAnimation.initial.x || 0}px) scale(${selectedAnimation.initial.scale || 1})`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
