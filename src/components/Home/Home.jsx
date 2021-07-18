import React from 'react'
import ImageSlider from '../../ui/ImageSlider/ImageSlider'
import { sliderData } from '../../utils/sliderData'

const Home = () => {
  return (
    <div>
      <ImageSlider slides={sliderData} />
    </div>
  )
}

export default Home
