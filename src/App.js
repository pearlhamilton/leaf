import React from "react"
import { Products, Basket, ProductPage,Home } from './pages'
import { Switch, Route } from 'react-router-dom';
import {Navbar} from './components'
import './style.css'


const App = () => {
    return(
        <>
        <Navbar/>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/basket" component={Basket} />
            <Route path="/products/:id" component={ProductPage}/>
            <Route render={() => <h1 id="notFound">Sorry...Not Found!</h1>} />
         </Switch>
        </>
    )
}


export default App;