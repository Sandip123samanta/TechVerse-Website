'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './slides/index';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            bgImage={'/banner/ws.jpg'}
            image1={'/banner/webdevelopment.jpeg'}
            image2={'/banner/supercoder.jpg'}
            event1={'Web Development'}
            event2={'Super Coders'}
            fees1={'80'}
            fees2={'100'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage={'/banner/fp.jpg'}
            image1={'/banner/freezetheframe.jpg'}
            image2={'/banner/posterexibhision.jpg'}
            event1={'Freeze The Frame'}
            event2={'Poster Exhibition'}
            fees1={'120'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage={'/banner/cf.jpg'}
            image1={'/banner/craftopia.jpg'}
            image2={'/banner/freezetheframe.jpg'}
            event1={'Craftopia'}
            event2={'Freeze The Frame'}
            fees1={'80'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage={'/banner/cp.jpg'}
            image1={'/banner/craftopia.jpg'}
            image2={'/banner/posterexibhision.jpg'}
            event1={'Craftopia'}
            event2={'Poster Exhibition'}
            fees1={'120'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            bgImage={'/banner/cpf.jpg'}
            image1={'/banner/craftopia.jpg'}
            image2={'/banner/posterexibhision.jpg'}
            image3={'/banner/freezetheframe.jpg'}
            event1={'Craftopia'}
            event2={'Poster Exhibition'}
            event3={'Freeze The Frame'}
            fees1={'150'}
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
