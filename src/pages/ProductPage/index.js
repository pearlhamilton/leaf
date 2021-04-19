import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'


const ProductPage = () => {

    const items = useSelector(state => state.products)

    return(

        <>
        <Navbar/>
        <h2>Im the product page</h2>

        </>

    )
}

export default ProductPage