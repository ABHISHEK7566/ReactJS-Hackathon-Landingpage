import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These Epic Destinations!</h1>
        <div className='cards__containers'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-13.jpg'
                    text='Explore The Biggest Tigers In The World "The Bengal Tiger"'
                    label='Adventure'
                    path='/services' 
                    />

                    <CardItem
                    src='images/img-14.jpg'
                    text='Travel Through The Beaches Of "Goa"'
                    label='Luxury'
                    path='/services' 
                    />
                </ul>

                <ul className='cards__items'>
                    <CardItem
                    src='images/img-12.jpg'
                    text='Explore Tourist Paradise Of India "The Andaman & Nicobar Islands"  '
                    label='Mystery'
                    path='/services' 
                    />

                    <CardItem
                    src='images/img-11.jpg'
                    text='Explore The Beauty Of "LEh-Ladakh"'
                    label='Adventure'
                    path='/products' 
                    />

                    <CardItem
                    src='images/img-8.jpg'
                    text='Ride Through The "Thar Desert" On A Guided Camel Tour'
                    label='Adrenaline'
                    path='/sign-up' 
                    />
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Cards