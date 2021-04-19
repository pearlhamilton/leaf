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
            return{}
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