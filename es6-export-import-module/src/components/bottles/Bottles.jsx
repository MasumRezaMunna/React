import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import { addToStoredCart, getStoreCart } from "../../utilities/localstorage";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  // useEffects
  useEffect(()=> {
    const storeCartIds = getStoreCart();
    // console.log(storeCartIds, bottles);

    const storedCart = [];

    for(const id of storeCartIds){
        // console.log(id);
        const cartBottle = bottles.find(bottle => bottle.id === id)

        if(cartBottle){
            storedCart.push(cartBottle)
        }
    }
        console.log('stored cart', storedCart)
        setCart(storedCart)

  }, [bottles])

  const handleAddToCart = (bottle) => {
    // console.log("bottle will be added to the cart", bottle);
    const newCart = [...cart, bottle]
    setCart(newCart)

    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  //   console.log(bottles)
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>Added to cart: {cart.length}</p>
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
