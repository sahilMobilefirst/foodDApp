import { Image1, Image2, Image3, cat1, cat2, cat3, popularFood1, suggest1, suggest2, suggest3 } from "../../assets/images";




export const categories = [
    { key: '1', title: 'All',img:cat1},
    { key: '2', title: 'Pizza',img:cat2 },
    { key: '3', title: 'Burger',img:cat3 }
  ];
  export const openRestaurants = [
    { key: '1', title: 'Cheese Burger',img:cat3,
    rating:4.2,price:6.45      
    },
    { key: '2', title: 'Pizza',img:cat2,rating:4.2,price:7.45 },
    { key: '3', title: 'Fries',img:cat1,
    rating:4.2,price:8.45} ];

    export const popularFood = [
        { key: '1', title: 'european Pizza',img:cat3,
        description:'Peppe Pizzeria'},
        { key: '2', title: 'Buffalo Pizza.',img:cat3,
        description:'Fratelli Figurato'} 
    ]

  export const RecentKeywords = [
    { key: 'food_1', name: 'Burger' },
    { key: 'food_2', name: 'Sandwich' },
    { key: 'food_3', name: 'Pizza' },
    { key: 'food_4', name: 'Fries' },
    { key: 'food_5', name: 'Taco' },
  ]

export const SuggestedRes = [
  {key:"1",name:"Pansi Restaurant",img:suggest1,rating:4.71},
  {key:"2",name:"American Spicy Burger Shop",img:suggest2,rating:4.52},
  {key:"3",name:"Cafenio Coffee Club",img:suggest3,rating:4.35},
  {key:"4",name:"Cafenio Coffee Club",img:suggest3,rating:4.35},
  {key:"5",name:"Cafenio Coffee Club",img:suggest3,rating:4.35},

]

export const dishSizes = [
  { key: '1', name: '10"' },
  { key: '2', name: '14"' },
  { key: '3', name: '16"' },
]

export const cartData =[
  {key:"1",name:"pizza calzone european",img:suggest1,price:32,quantity:1},
]

export const ordersData =[
  {key:"1",name:"Pizza Hut",img:suggest1,price:32,quantity:1,orderId:46464,category:"Food",status:"Completed",date:"29 Jan,12:30"},
  {key:"2",name:"McDonald's",img:suggest2,price:46,quantity:1,orderId:79844,category:"Food",status:"Completed",date:"29 Jan,12:30"},
  {key:"3",name:"Starbucks",img:suggest3,price:34,quantity:1,orderId:13131,category:"Food",status:"Cancelled",date:"29 Jan,12:30"},
]

export const introData =[
  { key: "1", img: Image2, text: "All your Favourites" },
  { key: "2", img: Image1, text: "order from chosen chef" },
  { key: "3", img: Image3, text: "Free delivery offers" },
]
