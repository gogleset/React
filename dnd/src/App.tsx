import { useState, useRef } from "react";
import "./App.css";

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  // 1️⃣
  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="box-wrapper" ref={wrapperRef}>
      <div
        className="box"
        ref={boxRef}
        style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
        // 사용자가 해당 element에서 마우스 버튼을 눌렀을 때 발생합니다.
        onMouseDown={(clickEvent: React.MouseEvent<Element, MouseEvent>) => {
          // 마우스가 움직일때 핸들러설정
          const mouseMoveHandler = (moveEvent: MouseEvent) => {
            // 2️⃣
            const deltaX = moveEvent.screenX - clickEvent.screenX;
            const deltaY = moveEvent.screenY - clickEvent.screenY;
            // console.log(deltaX, deltaY);
            // 3️⃣
            setPosition({
              x: x + deltaX,
              y: y + deltaY,
            });
          };
          // 사용자가 해당 element에서 눌렀던 마우스 버튼을 떼었을 때 발생합니다.
          const mouseUpHandler = (event: MouseEvent) => {
            console.warn(`>>>> mouse up x:${event.screenX} y:${event.screenY}`);
            document.removeEventListener("mousemove", mouseMoveHandler);
          };

          // 1️⃣
          document.addEventListener("mousemove", mouseMoveHandler);
          document.addEventListener("mouseup", mouseUpHandler, { once: true });
          // mouseup 이벤트는 한번만 실행되면 되기에 { once: true } 옵션을 추가해준다.
        }}></div>
    </div>
  );
}

export default App;
