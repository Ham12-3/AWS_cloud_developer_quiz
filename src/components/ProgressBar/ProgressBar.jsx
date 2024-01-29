import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ index, total }) => {
  const progress = (index / total) * 100;

  let color;
  if (progress < 50) {
    color = "red";
  } else if (progress === 50) {
    color = "darkyellow";
  } else {
    color = "green";
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
