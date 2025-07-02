import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ItemCount;
