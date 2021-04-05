import React from 'react';
import './LedProduct.css';
import ProductData from './ProductData';

const LedProductCard = () => {
  return (
    <div className='LedProduct'>
      <h2>Console street luminaire Avenue C1-S-COB</h2>
      <p>Avenue C1-S-COB is a mains-powered console-mounted street luminaire with one COB LED array,
      the maximum energy consumption of 80 W, and an input voltage of 120–220 V.
      It can be equipped with console and torchiere mounts.The device is compatible with
      the Avenue Smart Cover controller and dimming modules</p>
      <div className='row'>
        <ProductData text='Power Range' data='20-80 w' />
        <ProductData text='Luminous flux' data='2,793-11,843 lm' />
        <ProductData text='Weight' data='5.5 kg' />
      </div>
      <div className='data-container'>
        <div className='otherData'>
          <p>Ingress Protection</p>
          <p>Lifetime</p>
          <p>Input voltage frequency</p>
        </div>
        <div className='otherData reverse'>
          <p>IP66</p>
          <p> <span>&#62;</span>100,000 hours</p>
          <p>120-180 V</p>
        </div>
      </div>
    </div>
  )
}

export default LedProductCard