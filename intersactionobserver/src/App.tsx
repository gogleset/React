import "./App.css";
import { useEffect, useRef, useState } from "react";
import { aos } from "./util/observer";
// import { getviewCountPosts } from "./api/post";
import useObserver from "./hooks/useObserver";
function App() {
  const ref = useRef<HTMLDivElement>(null);
  // 많은 박스 object들
  const { isDomInViewport: isMoreDivInViewPort } = useObserver(ref);
  const [viewCount, setViewCount] = useState(1);
  const [prevViewCount, setPrevViewCount] = useState(0);
  useEffect(() => {
    if (isMoreDivInViewPort) {
      setPrevViewCount(viewCount);
      setViewCount(viewCount + 5);
    }
  }, [isMoreDivInViewPort]);

  aos(".box");
  return (
    <main>
      <h1>intersactionObserver</h1>
      {new Array(viewCount).fill(0).map((_, index) => {
        console.log(prevViewCount, index);
        if (prevViewCount >= index) {
          console.log("전");
          return <div className="box visible" key={index}></div>;
        }
        return <div className="box" key={index}></div>;
      })}
      <div className="more-btn" ref={ref}>
        more-btn
      </div>
    </main>
  );
}

export default App;
