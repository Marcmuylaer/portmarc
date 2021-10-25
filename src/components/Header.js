import React from 'react'
import Typed from 'react-typed'

export default function Header() {
    return (
        <div className = 'header-wrapper'>
          <div className= 'main-info'>
            <h1> Front-end dev </h1>
            <Typed 
             className='typed-text'
             strings={['web-design','web-dev']}
             typespeed={40}
             backspeed={60}
             loop
            />
            <a href= '#' className='main-offer-button'> Contact-me </a>
          </div>  
        </div>
    )
    
}


