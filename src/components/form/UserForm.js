import React from 'react';
import './FormContainer.css';

const UserForm = (props) => {
  const { type, text } = props;
  return (
    <form className='UserForm'>
      <label>{text}</label>
      <input placeholder='შეავსე ველი' type={type} required />
    </form >
  )
}

export default UserForm