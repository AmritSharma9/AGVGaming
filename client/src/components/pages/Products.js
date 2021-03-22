import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';

const Products = () => {
  return (
    <div className='cards'>
      <h1>Check out these Recently available Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Grab your products as soon as possible'
              label='2021/1/23'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Grab your products as soon as possible'
              label='2021/1/23'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Grab your products as soon as possible'
              label='2021/1/23'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Grab your products as soon as possible'
              label='2021/1/23'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Grab your products as soon as possible'
              label='2021/1/23'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products
