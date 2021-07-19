import shirt from './mens-black-shirt-500x500.jpg';
import shoes from'./shoes.jpg';
import sweater from './sweater.jpg';

const CartItems = [
    {
        name: 'Henley T Shirt',
        type: 'Dark Grey',
        sizes: [4,5,6],
        quantity: 1,
        price: 15,
        totalPrice: 15,
        image: shirt
    },
    {
        name: 'High Top Sneakers',
        type: 'Brown',
        sizes: [6,7,8],
        quantity: 1,
        price: 25,
        totalPrice: 25,
        image: shoes
    },
    {
        name: 'Sweater Hooded',
        type: 'Light Grey',
        sizes: [5,6,7],
        quantity: 1,
        price: 30,
        totalPrice: 30,
        image: sweater
    }
]

export default CartItems;