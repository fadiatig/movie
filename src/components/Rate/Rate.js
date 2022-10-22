import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rate = ({ rate }) => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      arr.push(
        <span>
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        </span>
      );
    } else {
      arr.push(
        <span>
          <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
        </span>
      );
    }
  }

  return <div>{arr}</div>;
};
export default Rate;
