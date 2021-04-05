import React from 'react';
import './Main.css';
import ProductList from '../productList/ProductList';
import ImageContainer from '../form/ImageContainer';

const Main = () => {
  return (
    <div className='Main'>
      <ProductList />
      <ImageContainer />
    </div>
  )
}

export default Main