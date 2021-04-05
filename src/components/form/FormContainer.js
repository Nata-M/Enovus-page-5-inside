import React from 'react';
import './FormContainer.css';
import UserForm from './UserForm';
const FormContainer = () => {
  return (
    <div className='FormContainer'>
      <div className='square'>
        <p>უმაღლესი ხარისხის LED სანათები ელექტრო ენერგიის
        ხარჯს შეგიმცირებთ და სინათლის ხარისხს გაგიუმჯობესებთ.
      </p>
        <div className='icon-text'>
          <img className='arrow' alt='left-arrow' src='/photos/arrow.svg' />
          <img className='txt-led' alt='led-lighting' src='/photos/led.png' />
        </div>
        <div className='user'>
          <UserForm text='სახელი, გვარი*' type='text' />
          <UserForm text='კომპანია*' type='text' />
          <UserForm text='ტელეფონი*' type='number' />
          <UserForm text='ელ-ფოსტა*' type='email' />
        </div>
        <div className='btn-container'>
          <button className='send-btn'>
            <img alt='button' src='/photos/send-btn.svg' />
          </button>
          <img className='arrow' alt='arrow' src='/photos/arrow-down.svg' />
        </div>
      </div>
      <div className='triangle'></div>
    </div>
  )
}

export default FormContainer