import React, { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    const incrementHandler = ()=> {
        setCount(count+1);
    }

    const decrementHandler = ()=> {
        setCount(count-1);
    }
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>

    </div>
  );
};

export default Counter;
