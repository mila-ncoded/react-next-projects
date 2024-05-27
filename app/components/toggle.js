"use client";
import { useState } from "react";
import classNames from "classnames";

export default function Toggle({ onToggle }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleClasses = classNames(
    "flex w-20 h-10 bg-gray-600 m-10 rounded-full transition-all duration-500",
    {
      "bg-green-500": isSelected,
    }
  );

  const circleClasses = classNames(
    "h-10 w-10 bg-white rounded-full transition-all duration-500",
    {
      "ml-10": isSelected,
    }
  );

  function toggleClickHandler() {
    onToggle(!isSelected);
    setIsSelected(!isSelected);
  }

  return (
    <div onClick={toggleClickHandler} className={toggleClasses}>
      <span className={circleClasses} />
      <p>This is a new feature!</p>
    </div>
  );
}
