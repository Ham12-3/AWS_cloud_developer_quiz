import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ index, total }) => {
  const progress = (index / total) * 100;

  let color;
  if (progress < 50) {
    color = "black";
  } else if (progress === 50) {
    color = "black";
  } else {
    color = "black";
  }

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
