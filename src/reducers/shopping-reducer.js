const initState = {
    products: [],
    cart: [],
    currentItem: null

}

const shoppingReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{}
        case 'REMOVE_FROM_CART':
            return{}
        case 'CHANGE_QUANTITY':
            return{}
        case 'LOAD_ITEM':
            return{}
    
        
    }
}