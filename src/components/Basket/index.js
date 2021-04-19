import React, {useState, useEffect }from "react"
import './style.css'

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
            <h3>Basket</h3>
            <img src="https://i.pinimg.com/originals/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg"></img>
            <h2>Counter: {count}</h2>
        </div>

    )
}


export default Basket;