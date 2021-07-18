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
    <div>
      <Card />
    </div>
    <Footer />
  </section>
)

export default Home
