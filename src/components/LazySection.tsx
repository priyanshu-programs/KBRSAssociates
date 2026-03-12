"use client";
import { useRef, useState, useEffect, type ReactNode } from 'react';

/**
 * Renders a wrapper that delays rendering its children until the wrapper is near the viewport.
 *
 * The component observes its wrapper with an IntersectionObserver (rootMargin: '1500px') and
 * renders `children` once the element intersects; the observer disconnects after the first intersection.
 *
 * @param children - Content to render once the section becomes visible
 * @returns A div element that initially reserves 1px of height and mounts `children` when visible
 */
export default function LazySection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1500px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : '1px' }}>
      {visible ? children : null}
    </div>
  );
}
