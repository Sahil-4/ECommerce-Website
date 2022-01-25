import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rate = (props) => {
  const Stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.Stars) {
      Stars.push(<AiFillStar key={i} className="star-icon-checked" />);
    } else {
      Stars.push(<AiFillStar key={i} className="star-icon-unchecked" />);
    }
  }
  return <>{Stars}</>;
};

export default Rate;
