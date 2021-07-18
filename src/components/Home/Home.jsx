import React from 'react'
import Card from '../../ui/Card/Card'
import ImageSlider from '../../ui/ImageSlider/ImageSlider'
import { sliderData } from '../../utils/sliderData'

const Home = () => {
  return (
    <div>
      <ImageSlider slides={sliderData} />
      <Card />
    </div>
  )
}

export default Home
