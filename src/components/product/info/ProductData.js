import React from 'react';
import './LedProduct.css'

const ProductData = (props) => {
  const { text, data } = props;

  return (
    <div className='productData'>
      <p>{text}</p>
      <p><strong>{data}</strong></p>
    </div>
  )
}

export default ProductData