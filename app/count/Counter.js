"use client";

import { useState } from "react";

export default function Counter({ increment, backgroundColor }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((currentCount) => {
      const nextCount = currentCount + increment;
      return nextCount > 10 ? 0 : nextCount;
    });
  }

  return (
    <section>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={handleClick}
        style={{ backgroundColor, color: "black" }}
      >
        Add {increment}
      </button>
    </section>
  );
}
