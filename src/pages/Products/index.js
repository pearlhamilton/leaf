import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'
import './style.css'


const Products = () => {

    const items = useSelector(state => state.products)

    return(

        <>
            <h1>Plants</h1>
            <div className="shopItems">
                {items.map(item => <Item key={item.id} productData ={item}/>
                )}
            </div>
        </>
    )
}


export default Products;