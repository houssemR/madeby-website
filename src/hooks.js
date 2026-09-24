import { useEffect, useRef } from 'react';

/**
 * Scroll reveals.
 *
 * One observer for four behaviours, because they all mean "this has come
 * into view": a reveal rises into place, a sew draws a thread, a pop is
 * something small landing, and a press is the wax seal coming down. They
 * share one observer so a single pass wires the whole page.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .sew, .pop, .press');
    if (!els.length) return;

    // No IntersectionObserver, no motion — but never no content.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/**
 * Counts a number up when it scrolls into view.
 *
 * Used once, on the row counter, where a number climbing is the thing the
 * section is actually about.
 */
export function useCounter(ref, end, duration = 1600) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      el.textContent = String(end);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const step = (t) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, end, duration]);
}
