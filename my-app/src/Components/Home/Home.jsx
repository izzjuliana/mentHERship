import React from 'react'
import './Home.css'

import flower_image from '../assets/images/flower.png'


function Home() {
  return (
    <div className="Home">
        <header className="Home title">mentHERship</header>
        <div className="Home slogan">slogan here</div>

        <div className="submit-container">
            <div className="submit">Login!</div>
            <div className="submit">Sign Up!</div>
        </div>
        <img src={flower_image} className="flower flower-left"/>
        <img src={flower_image} className= "flower flower-right"/>
    </div>
  )
}

export default Home