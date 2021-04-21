import React,{useState} from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'
import { useParams } from "react-router"
import {useDispatch} from "react-redux"
import { addToCart}  from '../../actions'



const ProductPage = () => {
const dispatch = useDispatch()

const params = useParams()
const items = useSelector(state => state.products)

const itemData = items[(params.id)-1]
const handleAddToCart = id => dispatch(addToCart(id))

 

    return(

        <>
        <Navbar/>
        <h2>{itemData.product}</h2>
        <img src={itemData.img}></img>
        <p>{itemData.description}</p>
        <p>£{itemData.price}</p>
        <button onClick = {() => handleAddToCart(itemData.id)}>Add to Cart</button>        
        </>

    )
}

export default ProductPage