import React, { useState, useEffect } from "react"
import { Navbar, CartItem } from '../../components'
import { useSelector } from 'react-redux'
import './style.css'


const Basket = () => {

    const cart = useSelector(state => state.cart)
    const [totalQuantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    console.log(cart)

    useEffect (() => {
        let quantity = 0
        let price = 0
        cart.forEach(item => {
         quantity += item.quantity
         price += item.price * item.quantity

        })
        setTotalPrice(price)
        setQuantity(quantity)
    }, [cart])

    return(

        <>
            <div id="basket-header">
            <h1>Your Basket</h1>
            <h2>Continue Shopping</h2>
            </div>
            <p>{totalQuantity} Items</p>
            <div className = "cartItems">
                {cart.map(item => <CartItem key={item.id} productData ={item}/>
                )}
            </div>
            <div className = "summary">
                <p>Total:</p>
                <p>Price: {totalPrice}</p>
               
            </div>

        </>

    )
}

export default Basket