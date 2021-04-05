import React from 'react';
import './ProductList.css';
import ProductCard from '../product/card/ProductCard'

const ProductList = () => {
  return (
    <div className='ProductList'>
      <div className='img-logo'>
        <img className='logo' alt='logo' src='/photos/enovus.svg' />
      </div>
      <div className='Content'>
        <img className='vector' alt='vector' src='/photos/vector-group.png' />
        <div style={{ marginTop: '40px' }}>
          <ProductCard image='/photos/light.png' />
          <ProductCard image='/photos/lighting.png' />
          <ProductCard image='/photos/lights.png' />
        </div>
        <img className='border' alt='border' src='/photos/vector-border.png' />
      </div>
    </div >
  )
}

export default ProductList