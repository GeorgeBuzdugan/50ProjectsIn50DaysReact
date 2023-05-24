import { RefObject, useEffect, useState } from 'react';

export default function useElementOnScreen(
  ref: RefObject<Element>,
  rootMargin = '-50px'
) {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const reference = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (reference) {
      observer.observe(reference);
    }
    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}
