import { useState, useEffect } from 'react';

const useVisibilityObserver = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    setObserver(observer);

    element.current && observer.observe(element.current);
  }, []);

  return { isVisible, observer };
};

export default useVisibilityObserver;
