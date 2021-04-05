import React from 'react';
import './ProductCard.css';
import LedProduct from '../info/LedProduct';

const Products = (props) => {
  const { image } = props;

  return (
    <div className='products'>
      <div className='image'>
        <img alt='lighting' src={image} />
      </div>
      <LedProduct />
    </div>
  )
}

export default Products