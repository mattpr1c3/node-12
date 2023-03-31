import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// pushes function out to app
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // A way to preserve values between the function calls
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // Increases count by one with each click
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Decreases count by one with each click
  const handleDecrement = () => {
    setCount((count - 1));
  };
  // Multiply count by two with each click
  const handleMultiply = () => {
    setCount((count * 2));
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody 
      props being passed are the counts*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleMultiply={handleMultiply}
      />
    </div>
  );
}
