/* eslint-disable */

import React, { useState } from "react";
import "./App.css";
import List from "./pages/List";
import Modal from "./pages/Modal";

// 메인페이지
function App() {
  let styles = { fontSize: "25px", color: "black" };

  let [title, setTitle] = useState([
    "강남 고기 맛집",
    "요즘 신발 뭐가 유행?",
    "남자 신발 추천",
  ]);

  // 스테이트는 대체 왜 쓰는가? 새로고침 없이 HTML에 재랜더링된다. 그냥 변수는 새로고침을 해야 랜더링이 된다.

  // 정렬하기
  // function sortTitle(arr) {
  //   let titles = [...arr];
  //   titles = titles.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  //   console.log(titles);
  //   setTitle(titles);
  // }
 

  return (
    <div className="App">
      <div className="black-nav">개발 blog</div>
      
      <Modal/>
      {title.map((v, i) => (
        <List data={title[i]}></List>
      ))}
    </div>
  );
}

export default App;
