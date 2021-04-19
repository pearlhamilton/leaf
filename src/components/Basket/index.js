import React, {useState, useEffect }from "react"
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


import { useSelector } from 'react-redux'


const Basket = () => {
    const [count, setCount] = useState(0)

    const cart = useSelector(state => state.cart)

    useEffect (() => {
        let num = 0
        cart.forEach(item => {
            num += item.quantity
        })

        setCount(num)
    }, [cart, count])

    return(
        <div id="Basket">
            <NavLink to ="/checkout" activeClassName="active">   <FontAwesomeIcon id="shoppingBasket"icon={faShoppingBasket}/></NavLink>
            <h2 id="basketCount">{count}</h2>
        </div>

    )
}


export default Basket;