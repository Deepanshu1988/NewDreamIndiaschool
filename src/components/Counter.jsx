import { useEffect, useState, useRef } from 'react';

const Counter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const observerRef = useRef(null);
  const hasAnimated = useRef(false);

  const startCounting = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    const startTime = Date.now();
    const startValue = 0;
    const endValue = end;
    const totalDuration = duration;

    const animate = (timestamp) => {
      const progress = Math.min((Date.now() - startTime) / totalDuration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
      );
    };

    // Check immediately on mount
    if (isInViewport(counterRef.current)) {
      startCounting();
      return;
    }

    // Set up intersection observer for scroll into view
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
    };

    // Create observer with more sensitive settings
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing
    if (counterRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    // Also check on scroll for any edge cases
    const handleScroll = () => {
      if (isInViewport(counterRef.current) && !hasAnimated.current) {
        startCounting();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [end]);

  // Add a reset effect when the component unmounts
  useEffect(() => {
    return () => {
      hasAnimated.current = false;
    };
  }, []);

  return (
    <div className="stat-item" ref={counterRef}>
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default Counter;