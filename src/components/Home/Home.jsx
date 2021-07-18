import React from 'react'
import Card from '../../ui/Card/Card'
import ImageSlider from '../../ui/ImageSlider/ImageSlider'
import { sliderData } from '../../utils/sliderData'
import Footer from '../Footer'

const Home = () => (
  <div>
    <ImageSlider slides={sliderData} />
    <Card />
    <Footer />
  </div>
)

export default Home
