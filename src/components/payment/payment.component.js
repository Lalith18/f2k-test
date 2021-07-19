import React from 'react';
import './payment.styles.css';

const Payment = () => {
    return(
        <div className='payment'>
            <h1 className='payment-title'>Payment Info.</h1>
            <h1 className='payment-label'>Payment Method.</h1>
            <div className='payment-options'>
                <button className='payment-button' >Credit Card</button>
                <button className='payment-button' >PayPal</button>
            </div>
            <h1 className='payment-label'>Name on Card:</h1>
            <input className='payment-input' />
            <h1 className='payment-label'>Card Number:</h1>
            <input className='payment-input' />
            <div className='payment-options'>
                <h1 className='payment-label'>Expiration Date:</h1>
                <h1 className='payment-label'>CCV:</h1>
            </div>
            <div className='payment-options'>
                <input className='payment-input-small' placeholder='MM' />
                <input className='payment-input-small' placeholder='YYYY' />
                <input className='payment-input-small'  placeholder='XXX' />
            </div>
            <button className='submit-button'>Check Out.</button>
        </div>
    )
}

export default Payment;