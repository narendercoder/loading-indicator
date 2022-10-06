import React, { useEffect, useState } from "react";
import "./progressBar.css";

const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <svg className="loading" width={size} height={size}>
        <circle
          className="circular-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className="circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(90 ${size/2} ${size/2} )`}
        ></circle>
        <text
        x={center}
        y={center}
        className="percentage"
        >
          {progress}%
        </text>
      </svg>
    </>
  );
}

export default ProgressBar;
