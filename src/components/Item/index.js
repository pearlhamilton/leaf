import React from "react"


const Item = (props) => {

    console.log(props.productData.id)
    return(
        <>
        <h4>{props.productData.product}</h4>
        <h4>{props.productData.description}</h4>
        <h4>£{props.productData.price}</h4>
        <img src={props.productData.img}></img>
        </>

    )
}

export default Item