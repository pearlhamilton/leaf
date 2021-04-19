import React from "react"
import { useDispatch } from 'react-redux'
import './style.css'
import { addToCart}  from '../../actions'


const Item = (props) => {
    const dispatch = useDispatch()
    console.log(props.productData.id)

    const handleAddToCart = id => dispatch(addToCart(id))
    return(
        <div className="item">

        <h4>{props.productData.product}</h4>
        <h4>{props.productData.description}</h4>
        <h4>£{props.productData.price}</h4>
        <img src={props.productData.img}></img>
        <button onClick = {() => handleAddToCart(props.productData.id)}>Add to Cart</button>
        <button>View item</button>
        </div>


    )
}

export default Item