import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './ImageSlider.scss'
import { sliderDataMobile } from '../../utils/sliderDataMobile/sliderDataMobile'
import { sliderData } from '../../utils/sliderData'
import useWindowDimensions from '../../hooks/useWindowDimensions/useWindowDimensions'

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)

  // code for change slide
  const { width } = useWindowDimensions()
  const [sliderUrls, setSliderUrls] = useState([])
  const { length } = sliderUrls

  useEffect(() => {
    if (width < 600) {
      setSliderUrls(sliderDataMobile)
    } else {
      setSliderUrls(sliderData)
    }
  }, [width])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(sliderUrls) || sliderUrls.length <= 0) {
    return null
  }
  return (
    <section className="slider">
      <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
      <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />

      {sliderUrls.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={`${slide + index}`}>
          {index === current && <img src={slide.image} key={`${slide + index}`} alt={`${slide}`} />}
        </div>
      ))}
    </section>
  )
}

export default ImageSlider
