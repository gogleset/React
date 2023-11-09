import { useEffect, useState } from "react";
import type { RefObject } from "react";

const useIsInViewport = (
  ref: RefObject<HTMLElement>,
  callback?: () => void
) => {
  // dom이 다 보이는지 안보이는지 판단
  const [isDomFullInViewport, setIsDomFullInViewport] = useState(false);
  // dom이 조금만 보이는지 안보이는지 판단
  const [isDomInViewport, setIsDomInViewport] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > 0) {
          setIsDomInViewport(true);
          setIntersectionRatio(entries[0].intersectionRatio);
        } else {
          setIntersectionRatio(0);
          setIsDomInViewport(false);
        }
        if (entries[0].intersectionRatio === 1) {
          if (ref.current) {
            setIsDomFullInViewport(true);
            if (callback) {
              callback();
            }
          }
        } else {
          setIsDomFullInViewport(false);
        }
      },
      { threshold: [0, 0.3, 0.5, 0.7, 1] }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isDomFullInViewport, isDomInViewport, intersectionRatio };
};

export default useIsInViewport;
