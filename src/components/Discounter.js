import React, { useState } from "react";
//creating a Discounter function 
function Discounter() {
    //initializing state
  const [discountCount, setDiscountCount] = useState(0);//0 as the initial value
   /*function to be called everytime we 
   click the discount button */
  function discount() {
    setDiscountCount(discountCount + 1);
    //add one
    //added a p element 
  }

  return (
    <div>
      <button onClick={discount}>Discount</button>
      <p>Number of times discounted: {discountCount}</p>
    </div>
  );
}

export default Discounter;
