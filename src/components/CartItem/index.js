import React from "react"
import './style.css'


const CartItem = (props) => {
  
    return(
        <div className="cartItem">
            <h4>{props.productData.product}</h4>
            <h2>£{props.productData.price}</h2>
            <img src={props.productData.img}></img>
            <h2>Quantity: {props.productData.quantity}</h2>
        </div>

    )
}

export default CartItem;