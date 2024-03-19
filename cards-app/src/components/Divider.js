import React from 'react';
import '../styles/Divider.css';

function Divider(props) {
    return (
      <div className='divider-container' style={{backgroundColor:props.bgColor}}>
        <p className='divider-text' style={{color:props.color}}>{props.title}</p>
      </div>
    );
};

export default Divider;