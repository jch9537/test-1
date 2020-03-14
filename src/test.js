import React from "react";

const Test = props => {
  const clickAlertValue = () => {
    alert("input값은 : " + props.inputValue + "입니다.");
  };
  return (
    <div>
      <div>
        <input value={props.inputValue} onChange={props.changeInput}></input>
        <button onClick={clickAlertValue}>눌러!</button>
      </div>
    </div>
  );
};

export default Test;
