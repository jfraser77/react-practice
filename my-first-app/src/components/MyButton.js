import React from "react";

const MyButton = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>{props.title}</button>
    </div>
  );
};

export default MyButton;
