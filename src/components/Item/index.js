import React from "react"
import './style.css'
import { Link } from 'react-router-dom'
import {AddtoCartBtn} from '..'

const Item = (props) => {



    return(
        <div className="item">
            <h4>{props.productData.product}</h4>
            <img src={props.productData.img}></img>
            <h4>£{props.productData.price}</h4>
            <div className="button-container">
            <AddtoCartBtn id={props.productData.id}/>
            <Link to={`products/${props.productData.id}`}>
            <button>View item</button>
            </Link>
            </div>
        </div>


    )
}

export default Item