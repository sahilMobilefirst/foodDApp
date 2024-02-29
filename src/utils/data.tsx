import { cat1, cat2, cat3, popularFood1, suggest1, suggest2, suggest3 } from "../../assets/images";
export const introLines= ["All your Favourites","order from choosen chef","Free delivery offers"]

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

]