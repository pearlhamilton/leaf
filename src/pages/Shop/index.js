import React from "react"
import { Navbar, Item } from '../../components'
import { useSelector } from 'react-redux'


const Shop = () => {

    const items = useSelector(state => state.products)

    return(

        <>
        <Navbar/>
        <h1>Planty</h1>
        <div>
        {items.map(item => <Item key={item.id} productData ={item}/>
        )}
        </div>

        <h2>Im the shop front page</h2>

        </>

    )
}


export default Shop;