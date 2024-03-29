'use client';

import { MutableRefObject, RefObject, useEffect } from 'react';

// ¡IMPORTANTE! Puede que sea necesario añadir un e.stopPropagation() al botón que abre el menú

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T> | MutableRefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      // If ref.current exists
      // and if the clicked element is inside the target, do nothing (return)
      if (ref.current && ref.current.contains(target)) return;
      callback();
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
}
