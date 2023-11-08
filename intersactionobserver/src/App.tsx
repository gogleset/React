import "./App.css";
import { useEffect, useRef, useState } from "react";
import { getIdPosts } from "./api/post";
function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [id, setId] = useState(1);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (ref.current) {
            setId((prev) => prev + 5);
            // observer.unobserve(entries[0].target);
          }
        }
      },
      { threshold: 1 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <h1>intersactionObserver</h1>
      {new Array(id).fill(0).map(() => {
        return <div className="box"></div>;
      })}
      <div className="more-btn" ref={ref}>
        more-btn
      </div>
    </main>
  );
}

export default App;
