import React, { useState, useEffect } from "react";

const useOnScreen = (ref: React.RefObject<any>) => {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    });
    ref.current && observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return onScreen;
};

export default useOnScreen;
