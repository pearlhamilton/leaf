import React from "react"
import { AddtoCartBtn} from '../../components'
import { useSelector } from 'react-redux'
import {useParams } from "react-router"

import './style.css'



const ProductPage = () => {

const params = useParams()
const item = useSelector(state => state.products.find(item => item.id == params.id))


if (!item){
    return(<h1>Oops... this item does not exist</h1>)
}
else {

    return(

        <div className="itemdetail">
            <h2>{item.product}</h2>
            <img src={item.img}></img>
            <p>{item.description}</p>
            <p>£{item.price}</p>
            <AddtoCartBtn id={item.id}/>
        </div>
       

    
    )
    }
}

export default ProductPage