import React,{useState} from 'react';
import './cart.styles.css';
import CartItems from '../../data/cartItemsData'
import CartListTile from '../cart-list-tile/cartListTile.component'


const Cart = () => {
    const [items, setItems] = useState(CartItems);

    const [total, setTotal] = useState(items.reduce((accumulator,item) => accumulator + item.price,0))

    const changeQuantity = (index, quantity) => {
        let newItems = [...items];
        newItems[index].quantity = quantity;
        newItems[index].totalPrice = newItems[index].price * newItems[index].quantity;
        setTotal(newItems.reduce((accumulator,item) => accumulator + item.totalPrice,0))
        setItems(newItems)
    }

    const removeItem = (index) => {
        let newItems;
        newItems = [...items]
        newItems.splice(index, 1);
        setItems(newItems, changeQuantity(index,0) );
        console.log(newItems);
        console.log(items);
    }

    return(
        <div className='cart'>
            <h1 className='cart-title'>Shopping Cart</h1>
            <div className='cart-header'>
                <h1 className='header-title product'>Product</h1>
                <h1 className='header-title'>Size</h1>
                <h1 className='header-title'>Quantity</h1>
                <h1 className='header-title'>Total Price</h1>
            </div>
            {items.map((data, index) => <CartListTile key={index} index={index} changeQuantity={changeQuantity} removeItem= {removeItem} {...data} /> )}
            <div className='cart-options'>
                <button className='cart-button'>Continue Shopping</button>
                <div className='cart-details'>
                    <div className='cart-sub-amount'>
                        <h1 className='cart-amount-title'>Subtotal:</h1>
                        <h1 className='cart-amount-value'>{`$${total}`}</h1>
                    </div>
                    <div className='cart-sub-amount'>
                        <h1 className='cart-amount-title'>Shipping:</h1>
                        <h1 className='cart-amount-value'>$0</h1>
                    </div>
                    <div className='cart-sub-amount-total'>
                        <h1 className='cart-amount-title'>Total:</h1>
                        <h1 className='cart-amount-value'>{`$${total}`}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;