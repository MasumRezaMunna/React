import React, { use, useState } from "react";
import Bottle from "./Bottle/Bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState();

  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    console.log("bottle will be added to the cart", bottle);
  };

  //   console.log(bottles)
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
