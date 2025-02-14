import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';

const Products = () => {
  return (
    <div className='cards'>
      <h1>Others products picture</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
             text='Tournament'
              label='2021/1/22'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Tournament'
              label='2021/1/22'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Tournament'
              label='2021/1/22'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Tournament'
              label='2021/1/22'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='LoremComming Comming soon Comming soon'
              label='2021/1/22'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products
