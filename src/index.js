import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
// import store from './store'


ReactDOM.render(
    <React.StrictMode>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
</React.StrictMode>,
  document.getElementById('root')
)

// STORE

//ACTION for example increment, describes what you want to do 

// REDUCER 

//DISPATCH 