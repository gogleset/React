import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [viewingCount, setViewingCount] = useState(5);
  const [viewingCountTotal, setViewingCountTotal] = useState(
    new Array(viewingCount).fill(0)
  );

  useEffect(() => {
    //로딩되었을 때만 실행
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setViewingCount((prev) => prev + 5);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  console.log(viewingCount);
  return (
    <main>
      <h1>intersactionObserver</h1>
      {viewingCountTotal.map((_, index) => {
        if (viewingCountTotal.length) {
          return <div className="box" key={index} ref={ref}></div>;
        } else {
          return <div className="box" key={index}></div>;
        }
      })}
    </main>
  );
}

export default App;
