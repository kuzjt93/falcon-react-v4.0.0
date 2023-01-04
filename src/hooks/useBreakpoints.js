import { useState, useEffect } from 'react';

export const useBreakpoints = () => {
  const gridBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540
  };
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [breakpoints, setBreakpoints] = useState({
    up: bp => {
      return width > gridBreakpoints[bp];
    },
    down: bp => {
      return width < gridBreakpoints[bp];
    }
  });
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setBreakpoints({
      up: bp => width >= gridBreakpoints[bp],
      down: bp => width < gridBreakpoints[bp]
    });
  }, [width]);

  return { width, height, breakpoints };
};
