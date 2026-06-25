import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-reveal animations
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/**
 * Animated counter hook
 */
export function useCounter(targetRef, end, duration = 1800) {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * end).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = end.toLocaleString();
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetRef, end, duration]);
}
