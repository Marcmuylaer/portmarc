import React from 'react'
import Typed from 'react-styled'

const Header = () => {
    return 
        <div className = 'header-wraper'>
          <div className= 'main-info'>
            <h1> Front-end dev </h1>
            <Typed 
             className='typed-text'
             strings={['web-design','web-dev']}
             typespeed={40}
             backspeed={60}
             loop
            />
            <a href= '#' className={btn-main}>Contact-me</a>
          </div>  
        </div>
    
}

export default header
