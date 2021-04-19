import React from "react"
import './style.css'



const CartItem = (props) => {
    

  
    return(
        <div className="cartItem">

        <h4>{props.productData.product}</h4>
        <h4>£{props.productData.price}</h4>
        <img src={props.productData.img}></img>
        <h4>Quantity: {props.productData.quantity}</h4>
        </div>


    )
}

export default CartItem