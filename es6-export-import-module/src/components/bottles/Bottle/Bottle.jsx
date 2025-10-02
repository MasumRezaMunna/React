import React from 'react';
import './Bottles.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {img, name, price, brand} = bottle;
    // console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{brand}</p>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;