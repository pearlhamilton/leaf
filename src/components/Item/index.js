import React from "react"
import { useDispatch } from 'react-redux'
import './style.css'
import { addToCart}  from '../../actions'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const handleAddToCart = id => dispatch(addToCart(id))

    return(
        <div className="item">
            <h4>{props.productData.product}</h4>
            <h4>£{props.productData.price}</h4>
            <img src={props.productData.img}></img>
            <button onClick = {() => handleAddToCart(props.productData.id)}>Add to Cart</button>
            <Link to={`shop/${props.productData.id}`}>
            <button>View item</button>
            </Link>
        </div>


    )
}

export default Item