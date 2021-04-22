import React from "react"
import { Basket } from '..'
import './style.css'
import { NavLink } from 'react-router-dom'


const Navbar= () => {
    return(
        <div id="navbar">
            <nav>
                <NavLink className="nav-link" exact to ="/" activeClassName="active">Home</NavLink>
                <NavLink className="nav-link"  exact to ="/products" activeClassName="active">Plants</NavLink>
            </nav>   
            <Basket/>
        </div>
    )
}


export default Navbar;