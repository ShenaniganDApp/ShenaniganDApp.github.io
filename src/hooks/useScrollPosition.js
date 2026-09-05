import { useLayoutEffect, useRef } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };

  const position = document.body.getBoundingClientRect();
  return { x: position.left, y: position.top };
}

export function useScrollPosition(effect) {
  const effectRef = useRef(effect);
  const position = useRef(getScrollPosition());
  const animationFrame = useRef(null);

  useLayoutEffect(() => {
    effectRef.current = effect;
  }, [effect]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current !== null) return;

      animationFrame.current = window.requestAnimationFrame(() => {
        const currPos = getScrollPosition();
        effectRef.current({ prevPos: position.current, currPos });
        position.current = currPos;
        animationFrame.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
}
