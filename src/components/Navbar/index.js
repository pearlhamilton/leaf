import React from "react"
import { Basket } from '..'
import './style.css'
import { NavLink } from 'react-router-dom'




const Navbar= () => {
    return(
        <div id="navbar">
           <nav>
            <NavLink exact to ="/" activeClassName="active">Home</NavLink>
            <NavLink to ="/checkout" activeClassName="active">Basket</NavLink>
        </nav>   
        <Basket/>
        </div>


    )
}


export default Navbar;