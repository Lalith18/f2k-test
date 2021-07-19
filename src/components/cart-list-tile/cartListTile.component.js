import React from 'react';
import './cartListTile.styles.css';
import QuantitySelector from '../quantity-selector/quantitySelector.component';
import SizeSelector from '../size-selector/sizeSelector.component';

const CartListTile = ({index, name, type, sizes, totalPrice, quantity, image, changeQuantity, removeItem}) => {
    return(
        <div className='cart-list-tile'>
            <div className='product-details'>
                <img src={image} className='product-image' alt='product' />
                <div>
                    <h1 className='product-name'>{name}</h1>
                    <h1 className='product-type'>{type}</h1>
                </div>
            </div>
            <SizeSelector sizes={sizes} />
            <QuantitySelector index={index} changeQuantity={changeQuantity} quantity={quantity} />
            <h1 className='product-price'>{`$${totalPrice}`}</h1>
            <button onClick={() => removeItem(index)} className='close-button'>&#215;</button>
        </div>
    )
}

export default CartListTile;