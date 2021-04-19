const initState = {
    products: [ {
        id: 1,
        product: "Devil's Ivy",
        description: "This is a great plant",
        price: 15,
        img: "https://img.freepik.com/free-photo/golden-pothos-devil-s-ivy-epipremnum-aureum-plant-wall_267395-404.jpg?size=338&ext=jpg"
    },
    {
        id: 2,
        product: "Calathea",
        description: "This is a great plant",
        price: 22,
        img: "https://www.gardenersdream.co.uk/images/calathea-makoyana-peacock-or-cathedral-window-plant-p4751-37679_image.jpg"
    }



],
    cart: [],
    currentItem: null


}

const shoppingReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            // go through the products and find the product where the id is equal to the payload id and return its data 
            const product = state.products.find(product => product.id === action.payload)
      
            //check if item is already in cart, we want to increase the quantity
            const inCart = state.cart.find(product => product.id === action.payload ? true: false )
            //go through the cart and see if in the card there is a product already in there that has an id the same as the action id, then inCart will be true
            return{
                ...state,
                cart: inCart? state.cart.map(product => product.id === action.payload ? {...product, quantity: product.quantity +1} : product) : [...state.cart,{...product, quantity:1}]}
                //if item is in the cart add to the quanity  else ,                                                                  add it to the cart 

    
        case 'REMOVE_FROM_CART':
            return{}
        case 'CHANGE_QUANTITY':
            return{}
        case 'LOAD_ITEM':
            return{}

        default:
            return state
    
        
    }
}

export default shoppingReducer;