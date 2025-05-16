import React, { useEffect, useState } from "react";

const FlipUnit = ({ unit, value }) => {
  const [previousValue, setPreviousValue] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== previousValue) {
      setFlipping(true);
      const timer = setTimeout(() => {
        setFlipping(false);
        setPreviousValue(value);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [value, previousValue]);

  const current = String(value).padStart(2, "0");
  const previous = String(previousValue).padStart(2, "0");

  return (
    <div className="flip-unit">
      <div className={`flip-card ${flipping ? "flipping" : ""}`}>
        <div className="upper">{previous}</div>
        <div className="lower">{current}</div>
        <div className="flip-upper">
          <span>{previous}</span>
        </div>
        <div className="flip-lower">
          <span>{current}</span>
        </div>
      </div>
      <div className="label">{unit}</div>
    </div>
  );
};

export default FlipUnit;
