import React from 'react'
import Card from '../../ui/Card/Card'
import ImageSlider from '../../ui/ImageSlider/ImageSlider'
import Publication from '../../ui/Publication'
import { publicationsData } from '../../utils/publicationsData'
import { sliderData } from '../../utils/sliderData'
import Footer from '../Footer'
import './Home.scss'

const Home = () => (
  <section className="home-container">
    <ImageSlider slides={sliderData} />
    <Publication data={publicationsData} />
    <div className="card-slider-container">
      <h3 className="title">PRODUCTOS MÁS BUSCADOS</h3>
      <div className="card-slider">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <Footer />
  </section>
)

export default Home
