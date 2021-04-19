import React from "react"
import { Shop, Checkout, OneProductPage } from './pages'
import { Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <>
         <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route render={() => <h1 id="notFound">Sorry...Not Found!</h1>} />
         </Switch>
        </>

    )
}


export default App;