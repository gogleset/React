import React, { useState } from "react";

const List = (props) => {
  let a = new Date();
  let [count, countSum] = useState(0);
  let [title, setTitle] = useState([props.data]);

  function changeTitle(params) {
      console.log(params);
    let newArray = [...params];
    newArray[0] = "여자코트 추천";
    setTitle(newArray);
  }

  return (
    <div className="list">
      <h3>
        {title[0]}
        <span
          onClick={() => {
            countSum(++count);
          }}
        >
          {" "}
          👍
        </span>{" "}
        {count}
      </h3>
      <button
        onClick={() => {
          changeTitle(title);
        }}
      >
        변경
      </button>
      <p>
        {a.getMonth() + 1}월 {a.getDate()}일 발행
      </p>
      <hr />
    </div>
  );
};

export default List;
