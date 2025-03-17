
import { useEffect, useState, useRef, RefObject } from 'react';

// Hook to check if element is in viewport
export function useInView(ref: RefObject<HTMLElement>, options = {}, once = true) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, once]);
  
  return isInView;
}

// Hook for staggered animations
export function useStaggeredAnimation(totalItems: number, staggerDelay = 100) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < totalItems; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * staggerDelay);
      
      timeouts.push(timeout);
    }
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [totalItems, staggerDelay]);
  
  return visibleItems;
}

// Hook for parallax scroll effect
export function useParallax(speed = 0.1) {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return ref;
}

// Hook for smooth counter animation
export function useSmoothCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const step = (end - start) / (duration / 16);
    const updateCount = () => {
      countRef.current += step;
      setCount(prev => {
        if ((step > 0 && prev + step >= end) || (step < 0 && prev + step <= end)) {
          return end;
        }
        return prev + step;
      });
      
      if ((step > 0 && countRef.current < end) || (step < 0 && countRef.current > end)) {
        timeRef.current = setTimeout(updateCount, 16);
      }
    };
    
    updateCount();
    
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [end, duration, start]);
  
  return Math.round(count);
}
