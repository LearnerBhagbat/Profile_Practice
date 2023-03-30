import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg from '../Components/HeroImg';

const contact = () => {
  return (
    <div>contact
      <Navbar></Navbar>
      <HeroImg heading='Contact' text='This is contact page'></HeroImg>
      <Footer></Footer>
    </div>
  )
}

export default contact