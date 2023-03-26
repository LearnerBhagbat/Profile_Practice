import React from 'react'
import build from '../Assets/buildings.jpg'
import { Link } from 'react-router-dom'
import './HeroImageStyle.css'



const HeroImage = () => {
  return (
    <div className='hero'>HeroImage
      <div className="mask">
        <img className='into-img' src={build} alt="building" />
      </div>
      <div className="content">
        <p>It's my profile page site</p>
        <h1>React Developer</h1>
        <Link className='btn' to='/Project'>Project</Link>
        <Link className='btn' to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default HeroImage;