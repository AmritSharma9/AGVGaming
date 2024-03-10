import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='A product is a tangible item that is put on the market'
              label='2024/1/5'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text=' tangible item that is put on the market'
              label='2024/1/23'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text=' tangible item that is put on the market'
              label='2024/1/23'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text=' tangible item that is put on the market'
              label='2024/1/23'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text=' tangible item that is put on the market'
              label='2024/1/23'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
