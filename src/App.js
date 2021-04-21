import React from "react"
import { Shop, Checkout, ProductPage } from './pages'
import { Switch, Route } from 'react-router-dom';
import {Navbar} from './components'
import './style.css'


const App = () => {
    return(
        <div id="container">
        <Navbar/>
         <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/shop/:id" component={ProductPage}/>
            <Route render={() => <h1 id="notFound">Sorry...Not Found!</h1>} />
         </Switch>
        </div>
    )
}


export default App;