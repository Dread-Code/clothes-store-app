import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'
import './ImageSlider.scss'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const { length } = slides

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <section className="slider">
      <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
      <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />

      {slides.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={`${slide + index}`}>
          {index === current && <img src={slide.image} key={`${slide + index}`} alt={`${slide}`} />}
        </div>
      ))}
    </section>
  )
}
ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
}

export default ImageSlider
