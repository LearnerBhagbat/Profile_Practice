import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg from '../Components/HeroImg';
import Pricing from '../Components/Pricing';

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg heading="Projects" text="Some of the recent work"></HeroImg>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  )
}

export default Project