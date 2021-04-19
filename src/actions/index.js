
export const addToCart  = itemId => ({type: 'ADD_TO_CART', payload: itemId})

export const removeFromCart  = itemId => ({type: 'REMOVE_FROM_CART', payload: itemId})

export const changeQuantity = (itemId, quantity) => {
    return {
    type : 'CHANGE_QUANTITY', 
    payload: {
        id:itemId,
        quantity:quantity
        }
    }
}

export const loadItem = (item) => ({type: "LOAD_ITEM", payload: item})