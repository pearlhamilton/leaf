import React from "react"
import './style.css'
import image from './plants.png'
import {Link} from 'react-router-dom'


const Home = () => {


    return(

        <>
            <h1>Leaf.</h1>
            <Link to ="/products"><h3>Shop our plants</h3> </Link>
            <img src={image}></img>
        </>
    )
}


export default Home;