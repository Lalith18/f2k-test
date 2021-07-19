import React from 'react';
import './quantitySelector.styles.css'

const QuantitySelector = ({index, changeQuantity ,quantity}) => {
    return(
        <div className='quantity-selector'>
            <button onClick={() =>changeQuantity(index,quantity-1)} disabled={quantity === 1} className='quantity-button'>-</button>
            <h1 className='quantity'>{quantity}</h1>
            <button onClick={() =>changeQuantity(index,quantity+1)} className='quantity-button'>+</button>
        </div>
    )
}

export default QuantitySelector;