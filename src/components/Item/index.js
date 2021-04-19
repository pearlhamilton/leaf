import React from "react"
import { useDispatch } from 'react-redux'
import './style.css'
import { addToCart}  from '../../actions'
import { useSelector } from 'react-redux'



const Item = (props) => {
    const dispatch = useDispatch()
    console.log(props.productData)

    const cart = useSelector(state => state.cart)
    console.log(cart)

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