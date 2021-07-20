import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import Card from '../Card/Card'
import './styles.scss'
import getProductos from '../../services/getProducts/getProducts'

SwiperCore.use([Pagination])

export default function CardSlider() {
  const [data, setData] = useState([])

  useEffect(async () => {
    const result = await getProductos()
    setData(result)
  }, [])
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        {data.length > 0 &&
          data.map(({ id, price, nameProduct, imageUrl }) => (
            <SwiperSlide>
              <Card key={id} price={price} nameProduct={nameProduct} imageUrl={imageUrl} id={id} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
