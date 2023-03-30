import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg from '../Components/HeroImg';

const About = () => {
  return (
    <div>
    <Navbar></Navbar>
    <HeroImg heading="About" text="Frontend Develoer Bitch"></HeroImg>
    <Footer></Footer>
    </div>
  )
}

export default About