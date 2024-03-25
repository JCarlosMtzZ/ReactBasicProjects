import React from 'react';
import '../styles/Card.css';

class CardClass extends React.Component {
  render () {
    return (
      <div className='card-container'>
        <img 
          className='card-img'
          src={require(`../img/Card-${this.props.img}.png`)}
          alt={this.props.alt} />
        <div className='card-text-container'>
          <p className='card-name'>
            <b>{this.props.name}</b> in {this.props.country}
          </p>
          <p className='card-charge'>
            {this.props.charge} at <b>{this.props.company}</b>
          </p>
          <p className='card-text'>
            "{this.props.testimony}"
          </p>
        </div>
      </div>
    );
  }
}

export default CardClass;
