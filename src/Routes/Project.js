import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg from '../Components/HeroImg';
import Pricing from '../Components/Pricing';
import WorkCard from '../Components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg heading="Projects" text="Some of the recent work"></HeroImg>
      <WorkCard />
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  )
}

export default Project