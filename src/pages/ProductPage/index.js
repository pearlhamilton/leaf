import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'


const ProductPage = () => {

    const items = useSelector(state => state.cart)
    console.log(items)

    return(

        <>
        <Navbar/>
        <h2>Im the product page</h2>

        {/* <div>
        {items.map(item => <Item key={item.id} productData ={item}/>
        )}
        </div> */}
        </>

    )
}

export default ProductPage