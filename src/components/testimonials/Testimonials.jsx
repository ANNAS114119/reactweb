import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me.png'
import AVTR2 from '../../assets/me.png'
import AVTR3 from '../../assets/me.png'
import AVTR4 from '../../assets/me.png'

// import Swiper core and required modules
import { Navigation, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>anas mohd</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicingvgv elit. Reprehenderit maiores quidem, dolor beatae libero vel voluptates facilis. Illo eaque quia eius adipisci labore? Velit architecto consequuntur asperiores ab, ullam doloremque?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>anas mohd</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores quidem, dolor beatae libero vel voluptates facilis. Illo eaque quia eius adipisci labore? Velit architecto consequuntur asperiores ab, ullam doloremque?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>anas mohd</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores quidem, dolor beatae libero vel voluptates facilis. Illo eaque quia eius adipisci labore? Velit architecto consequuntur asperiores ab, ullam doloremque?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5>anas mohd</h5>
            <small className='clients__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores quidem, dolor beatae libero vel voluptates facilis. Illo eaque quia eius adipisci labore? Velit architecto consequuntur asperiores ab, ullam doloremque?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials