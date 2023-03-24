import React from 'react'
import build from '../Assets/buildings.jpg'



const HeroImage = () => {
  return (
    <div className='hero'>HeroImage
    <div className="mask">
        <img className='into-img' src={build} alt="building" />
    </div>
    </div>
  )
}

export default HeroImage;