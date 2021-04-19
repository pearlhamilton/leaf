import React from "react"
import './style.css'


const Item = (props) => {

    console.log(props.productData.id)
    return(
        <div className="item">

        <h4>{props.productData.product}</h4>
        <h4>{props.productData.description}</h4>
        <h4>£{props.productData.price}</h4>
        <img src={props.productData.img}></img>
        <button>Add to Cart</button>
        <button>View item</button>
        </div>


    )
}

export default Item