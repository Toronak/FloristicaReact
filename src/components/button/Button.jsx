import React from 'react';
import './button.scss';

function Button(props){
  return(
    <a  className='btn' href={props.adress}>{props.text}</a>
  )
}

export default Button;