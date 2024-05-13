import React from 'react'
import './Home.css'

import hero_img from '../../assets/hero.jpg';
// import title_name from '../../assets/title1.png'
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Navbar from '../../componenet/Navbar/Navbar'
import TitleCards from '../../componenet/TitleCards/TitleCards';
import Footer from '../../componenet/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_img} alt="" className='banner_image' />
        <div className="hero-caption">
          {/* <img src={title_name} alt="" className='caption-img'/> */}
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          <div className="hero-btn">
            <button  className='btn '><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards className='title-cards'/>
        </div>
      </div>
      <div className="more-card">
      <TitleCards title={"popular"} category={"popular"}/>
      <TitleCards  title={"top_rated"} category={"top_rated"}/>
      <TitleCards  title={"upcoming"} category={"upcoming"}/>
      <TitleCards  title={"Only On MoviFlix"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home