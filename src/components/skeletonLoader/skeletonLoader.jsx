// SkeletonLoader.js
import React from "react";
import "./skeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
        <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default SkeletonLoader;
