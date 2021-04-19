import React from "react"
import { Navbar, CartItem } from '../../components'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const cart = useSelector(state => state.cart)
    console.log(cart)



    return(

        <>
        <Navbar/>
        <h2>Im the checkout page</h2>
          <div>
        {cart.map(item => <CartItem key={item.id} productData ={item}/>
        )}
        </div>

        </>

    )
}

export default Checkout