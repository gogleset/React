import { useEffect, useState } from "react";
import type { RefObject } from "react";

const useObserver = (ref: RefObject<HTMLElement>, callback?: () => void) => {
  // dom이 보이는지 안보이는지 판단
  const [isDomInViewport, setIsDomInViewport] = useState(false);
  useEffect(() => {
    console.log(ref);
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (ref.current) {
            setIsDomInViewport(true);
            if (callback) {
              callback();
            }
            // observer.unobserve(entries[0].target);
          }
        } else {
          setIsDomInViewport(false);
        }
      },
      { threshold: 1 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isDomInViewport };
};

export default useObserver;
