const initState = {
    products: [ {
        id: 1,
        product: "Devil's Ivy",
        description: "A fast-growing vine, devil's ivy is a climber whose length depends on whether it’s grown as a houseplant or outdoors. In the landscape, it can grow up to 40 feet long, whereas indoor plants typically range from 6 to 8 feet in length if left unpruned. The vine produces waxy, heart-shaped foliage variegated with bright yellow and green, and once again, the size of the leaves depends on where the plant is cultivated.",
        price: 15,
        img: "https://img.freepik.com/free-photo/golden-pothos-devil-s-ivy-epipremnum-aureum-plant-wall_267395-404.jpg?size=338&ext=jpg"
    },
    {
        id: 2,
        product: "Calathea",
        description: "Calathea is a genus of plants belonging to the family Marantaceae. There are several dozen species in this genus. Native to the tropical Americas, many of the species are popular as pot plants due to their decorative leaves and, in some species, colorful inflorescences",
        price: 22,
        img: "https://www.gardenersdream.co.uk/images/calathea-makoyana-peacock-or-cathedral-window-plant-p4751-37679_image.jpg"
    },
    {
        id:3,
        product: "Aloe Vera",
        description: "Aloe vera is a herb with succulent leaves that are arranged in a rosette. The leaves are grey to green and sometimes have white spots on their surfaces. They have sharp, pinkish spines along their edges and are the source of the colourless gel found in many commercial and medicinal products. Aloe vera has yellow, tube-like flowers that cluster on a stem.",
        price: 12,
        img: "https://images-na.ssl-images-amazon.com/images/I/41ReDUdtaeL._AC_.jpg"
    },
    {
        id: 4,
        product:"Coconut Palm",
        description:"Characterized by a tall, grey-brown slightly curved trunk, sprawling palm frond, and, of course, coconuts, this plant is native to many tropical regions (think: the western pacific islands, Florida coast or Caribbean islands) and loves all things, well, tropical. Even with unlimited space and resources, it can be tough for a home gardener to replicate the moisture, temperature, and sun levels needed for the coconut palm to thrive indoors—not to mention that mature plans (between four and 10-years-old) can sprout to be up to 100 feet tall!",
        price:20,
        img:"https://oxy-plants.com/wp-content/uploads/2020/11/MG_8662.jpg"
    },
    {
        id: 5,
        product:"Fishbone Cactus",
        description:"This unusual cactus originates from the rainforest of Mexico and has uniquely shaped long, flat stems resembling a fishbone, hence its name! The stems will begin by growing upright but as they grow longer will eventually trail down. This is an epiphytic plant meaning it grows aerial roots as in its natural environment the fishbone would anchor to a host plant.",
        price: 30,
        img:"https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1595009167/eauv1ygrw7agxzoe5wio.jpg"
    },
    {
        id: 6,
        product: "Swiss Cheese Plant",
        description:"The Swiss Cheese Plant was a 70's cult classic, its retro-chic appeal makes it just as popular today and rightly so. Its large, glossy, heart shaped, leaves add fantastic impact with their perforations and lobes, which develop as the leaf matures.",
        price:40,
        img:"https://cdn.shopify.com/s/files/1/1706/1307/products/Monstera-deliciosa-Swiss-Cheese-Plant_2000x.jpg?v=1606041662"
    },
    {
        id: 7,
        product: "Pineapple Plant",
        description: "Pineapple plants (Ananas comosus) are members of the Bromeliad family and, like other Bromeliads, purifies the air and removes harmful toxins from your home.",
        price: 15,
        img: "https://cdn.shopify.com/s/files/1/0255/9760/8011/products/1becefa2cb0aa267c0c50e53b3a8be99_570x570_crop_center.jpg?v=1618962287"
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