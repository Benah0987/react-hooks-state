import React, { useState } from "react";

function Discounter() {
  const [discountCount, setDiscountCount] = useState(0);

  function discount() {
    setDiscountCount(discountCount + 1);
  }

  return (
    <div>
      <button onClick={discount}>Discount</button>
      <p>Number of times discounted: {discountCount}</p>
    </div>
  );
}

export default Discounter;
