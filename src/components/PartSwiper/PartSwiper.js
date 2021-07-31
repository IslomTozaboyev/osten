import "./PartSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { Component } from "react";

const nashSwipers = [
  { img: "https://osten.vercel.app/images/index/partner1.png" },
  { img: "https://osten.vercel.app/images/index/partner3.png" },
  { img: "https://osten.vercel.app/images/index/partner4.png" },
  { img: "https://osten.vercel.app/images/index/partner5.png" },
  { img: "https://osten.vercel.app/images/index/partner6.png" },
  { img: "https://osten.vercel.app/images/index/partner7.png" },
];

export default class PartSwiper extends Component {
  render() {
    return (
      <div className="home__services ">
        <div className="container swiper__container p-5">
          <div className="services__title">
            <h1 className="title text-center">Наши партнеры</h1>
          </div>
          <Swiper
            className="d-flex text-center my-5"
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              510: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
                slidesPerGroup: 1,
              },
            }}
          >
            {nashSwipers.map((value, index) => {
              return (
                <SwiperSlide className="swiper__slide mt-2">
                  <div className="swiper__slides  text-center">
                    <div className="cards">
                      <img src={value.img} alt="rasm" className="w-100" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="text-center"></div>
        </div>
      </div>
    );
  }
}
