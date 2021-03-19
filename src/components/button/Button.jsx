import React from 'react';
import './button.scss';

function Button(props){
  return(
    <a className='btn' href={props.link}>{props.children}</a>
  )
}

export default Button;