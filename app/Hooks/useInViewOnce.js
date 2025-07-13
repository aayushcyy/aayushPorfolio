import { useRef, useState, useEffect } from "react";

export function useInViewOnce(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
