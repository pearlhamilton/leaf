import React from "react"
import { Navbar, AddtoCartBtn } from '../../components'
import { useSelector } from 'react-redux'
import { useParams } from "react-router"



const ProductPage = () => {

const params = useParams()
const items = useSelector(state => state.products)
const itemData = items[(params.id)-1]


    return(

        <>
        <Navbar/>
        <h2>{itemData.product}</h2>
        <img src={itemData.img}></img>
        <p>{itemData.description}</p>
        <p>£{itemData.price}</p>
        <AddtoCartBtn id={itemData.id}/>
        </>

    )
}

export default ProductPage