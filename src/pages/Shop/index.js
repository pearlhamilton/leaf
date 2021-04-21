import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'
import './style.css'


const Shop = () => {

    const items = useSelector(state => state.products)

    return(

        <>
            <h1>Leaf.</h1>
            <div className="shopItems">
                {items.map(item => <Item key={item.id} productData ={item}/>
                )}
            </div>
        </>
    )
}


export default Shop;