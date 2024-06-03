import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import kashyapKhadelwalImg from '../imgs/kashyap_khadelwal.png';
import { FaArrowRight } from 'react-icons/fa';

const SuccessStories = () => {
  return (
    <section className=" mb-72 md:mb-52 max-w-screen-lg h-40 w-full mx-auto">
      <div className="flex items-center justify-between w-full px-10 mb-5">
        <div className="uppercase">
          <span className="font-light">success</span>
          <h5 className="font-bold text-3xl">Stories</h5>
        </div>
        <button className="rounded-full hidden md:flex items-center gap-x-4 bg-primary-blue px-3 py-2 text-xs text-white font-semibold">
          <span>Enquire Now</span>
          <div className="size-6 bg-primary-yellow rounded-full flex ">
            <FaArrowRight className="text-primary-blue m-auto" />
          </div>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        style={{
          height: '280px',
          '--swiper-navigation-color': '#292967',
          '--swiper-pagination-color': '#292967',
          '--swiper-navigation-size': '18px',
          '--swiper-navigation-top-offset': '100px',
        }}
      >
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="h-60 aspect-square"
            src={kashyapKhadelwalImg}
            alt="kashyap_khadelwal"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="h-60 aspect-square"
            src={kashyapKhadelwalImg}
            alt="kashyap_khadelwal"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="h-60 aspect-square"
            src={kashyapKhadelwalImg}
            alt="kashyap_khadelwal"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="h-56 aspect-square"
            src={kashyapKhadelwalImg}
            alt="kashyap_khadelwal"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="h-56 aspect-square"
            src={kashyapKhadelwalImg}
            alt="kashyap_khadelwal"
          />
        </SwiperSlide>
      </Swiper>
      <button className="rounded-full md:hidden m-auto mt-2  flex items-center gap-x-4 bg-primary-blue px-3 py-2 text-xs text-white font-semibold">
        <span>Enquire Now</span>
        <div className="size-6 bg-primary-yellow rounded-full flex ">
          <FaArrowRight className="text-primary-blue m-auto" />
        </div>
      </button>
    </section>
  );
};

export default SuccessStories;
