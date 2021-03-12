import { RefObject, useEffect } from 'react';

/**
 * Outside click listener
 * @param ref - element, clicks listed outside of this element
 * @param callback
 */
const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
