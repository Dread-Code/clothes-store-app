import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import Publication from '../../components/Publication'
import { publicationsData } from '../../utils/publicationsData'
import CardSliderer from '../../components/CardSlider'
import './Home.scss'

const Home = () => (
  <section className="home-container">
    <ImageSlider />
    <Publication data={publicationsData} />
    <div className="card-slider-container">
      <h3 className="title"> PRODUCTOS MÁS BUSCADOS</h3>
      <div className="card-slider">
        <CardSliderer />
      </div>
    </div>
  </section>
)

export default Home
