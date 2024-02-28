import { cat1, cat2, cat3, popularFood1 } from "../../assets/images";
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