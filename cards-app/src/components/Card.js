import React from 'react';
import '../styles/Card.css';

function Card(props) {
  return (
    <div className='card-container'>
      <img 
        className='card-img'
        src={require(`../img/Card-${props.img}.png`)}
        alt={props.alt} />
      <div className='card-text-container'>
        <p className='card-name'>
          <b>{props.name}</b> in {props.country}
        </p>
        <p className='card-charge'>
          {props.charge} at <b>{props.company}</b>
        </p>
        <p className='card-text'>
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Card;