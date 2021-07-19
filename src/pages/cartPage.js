import React from 'react';
import './cartPage.styles.css';
import Cart from '../components/cart/cart.component'
import Payment from '../components/payment/payment.component'

const CartPage = () => {
    return(
        <div className='cart-page'>
            <Cart />
            <Payment />
        </div>
    )
}

export default CartPage;