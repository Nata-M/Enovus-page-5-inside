import React from 'react';
import './FormContainer.css';
import FormContainer from './FormContainer';

const ImageContainer = () => {
  return (
    <div className='ImageContainer'>
      <div className='img-container'>
        <img className='clouds' alt='clouds' src='/photos/clouds.png' />
        <img className='img1' alt='lighting' src='/photos/light.png' />
        <img className='img2' alt='lighting' src='/photos/lighting.png' />
        <img className='img3' alt='lighting' src='/photos/lights.png' />
        <img className='img4' alt='lighting' src='/photos/light-hidden.png' />
      </div>
      <FormContainer />
    </div>
  )
}

export default ImageContainer