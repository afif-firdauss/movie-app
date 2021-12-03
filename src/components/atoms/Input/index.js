import React from 'react';
import './input.css';

const Input = ({label, ...rest}) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input {...rest}/>
    </div>
  )
}

export default Input;