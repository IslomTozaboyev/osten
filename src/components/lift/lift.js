import "./lift.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const swipers = [
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg",
    title: "OSTEN L1",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg",
    title: "OSTEN L2",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg",
    title: "osten l3",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg",
    title: "OSTEN L1",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg",
    title: "OSTEN L2",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg",
    title: "osten l3",
  },
];

const Lift = () => {
  return (
    <div className="home__services ">
      <div className="container swiper__container p-5">
        <div className="services__title">
          <h1 className="title text-center mb-5">Кабины лифтов</h1>
        </div>
        <Swiper
          className="d-flex text-center"
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            500: {
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
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              slidesPerGroup: 1,
            },
          }}
        >
          {swipers.map((value, index) => {
            return (
              <SwiperSlide className="swiper__slide my-5">
                <div className="card__swiper">
                  <div className="">
                    <img
                      src={value.img}
                      alt="rasm"
                      className="w-100 swiper__img"
                    />
                    <h5 className="swiper__subtitle">{value.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="text-center">
          <button className="btn text-white my-3">
            <a className="text-white shadow-none" href="/ПРОДУКЦИЯ">
              ВСЯ ПРОДУКЦИЯ
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lift;
