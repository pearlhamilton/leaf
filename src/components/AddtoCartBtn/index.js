import React from "react"
import { useDispatch } from "react-redux"
import {addToCart} from '../../actions'




const AddtoCartBtn = (props) => {
    const dispatch = useDispatch()
    const id = props.id
    const handleAddToCart = id => {
        dispatch(addToCart(id))}

    
    return(
        <button onClick = {() => handleAddToCart(id)}>Add to Cart</button>)
}


export default AddtoCartBtn;