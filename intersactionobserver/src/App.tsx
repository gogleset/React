import "./App.css";
import { useEffect, useRef, useState } from "react";
import { aos } from "./util/observer";
import { scrollEvent } from "./util/scroll";
// import { getviewCountPosts } from "./api/post";
import useIsInViewport from "./hooks/useIsInViewport";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { isDomFullInViewport, isDomInViewport, intersectionRatio } =
    useIsInViewport(ref);
  const [viewCount, setViewCount] = useState(1);
  const [prevViewCount, setPrevViewCount] = useState(0);
  useEffect(() => {
    if (isDomFullInViewport) {
      setPrevViewCount(viewCount);
      setViewCount(viewCount + 5);
    }
  }, [isDomFullInViewport]);
  useEffect(() => {
    if (isDomInViewport) {
      scrollEvent(intersectionRatio);
    }
  }, [intersectionRatio, isDomInViewport]);

  aos(".box");

  return (
    <>
      <main>
        <h1>intersactionObserver</h1>
        {new Array(viewCount).fill(0).map((_, index) => {
          if (prevViewCount >= index) {
            return <div className="box visible" key={index}></div>;
          }
          return <div className="box" key={index}></div>;
        })}
      </main>
      <div className="more-btn" ref={ref}>
        more-btn
      </div>
    </>
  );
}

export default App;
