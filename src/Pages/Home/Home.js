import React, { Component } from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPen,
  faCircleNotch,
  faCog,
  faThumbsUp,
  faUser,
  faListOl,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import HomeCard from "../../components/HomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";
import Lift from "../../components/lift";
import PartSwiper from "../../components/PartSwiper/PartSwiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const text = [
  {
    icon: faPen,
    title: "ПРОЕКТИРОВАНИЕ",
    subtitle: "Подробно про проектирование",
  },
  { icon: faBriefcase, title: "МОНТАЖ", subtitle: "ПОДРОБНО ПРО МОНТАЖ" },
  {
    icon: faCircleNotch,
    title: "ЗАПАСНЫЕ ЧАСТИ",
    subtitle: "ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ",
  },
  { icon: faCog, title: "РЕМОНТ", subtitle: "ПОДРОБНО ПРО РЕМОНТ" },
];

const result = [
  { icon: faPen, title: "300", subtitle: "лифтов в год" },
  { icon: faBriefcase, title: "2", subtitle: "года на рынке" },
  { icon: faCircleNotch, title: "200", subtitle: "эскалаторов в год" },
];

const poisk = [
  {
    icon: faAccusoft,
    title: "Поиск и инновации",
    subtitle: "Мы ведем постоянный поиск и внедряем инноваций",
  },
  {
    icon: faThumbsUp,
    title: "Качество и цена",
    subtitle:
      "Предложение лифтов и эскалаторов высокого качества по конкурентным ценам",
  },
  {
    icon: faUser,
    title: "Индивидуальный подход",
    subtitle:
      "ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИИндивидуальный и гибкий подход к каждому клиенту",
  },
  {
    icon: faListOl,
    title: "Широкий ассортимент",
    subtitle:
      "Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами",
  },
  {
    icon: faCheck,
    title: "Гибкость",
    subtitle:
      "Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания",
  },
];

const kliens = [
  {
    title: "JOHN DOE • PROPERTY INVESTOR",
    subtitle: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
     Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
     В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
  {
    title: "Author • CYBERSPACE DEVELOPMENT CENTER",
    subtitle:
      "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney",
  },
  {
    title: "Abdulaziz • Algorismic Company",
    subtitle: `Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
];

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__opacity d-flex align-items-center text-white">
          <div className="container overflow-hidden">
            <Zoom>
              <h1>
                «Osten» — уникальный производитель, лифтов и эскалаторов в
                Средней Азии
              </h1>
            </Zoom>
            <Zoom>
              <Slide right>
                <p>Компания «Osten» была основана в 2019 году!</p>
              </Slide>
            </Zoom>
            <Fade right>
              <button className="btn text-white">ПОДРОБНЕЕ</button>
            </Fade>
          </div>
        </div>
      </div>

      {/* home__services section */}
      <div className="home__services section__padding">
        <div className="container">
          <div className="services__title">
            <h1 className="title text-center"> Наши услуги </h1>
          </div>
          <div className="row justify-content-center mt-4">
            {text.map((value, index) => {
              return (
                <HomeCard className="col-10 col-md-6 col-lg-3 my-5">
                  <Fade up>
                    <div className="homeCard  text-center p-5">
                      <div>
                        <FontAwesomeIcon
                          className="display-1 mb-4"
                          icon={value.icon}
                        />
                        <p className="subtitle fs-4">{value.title}</p>
                        <p className="subtitle2 fs-4">{value.subtitle}</p>
                      </div>
                    </div>
                  </Fade>
                </HomeCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* natija__section */}
      <div className="home__services result__section w-100 section__padding">
        <div className="container result__opacity txet-white w-100">
          <div className="result__title">
            <h1 className="title text-center text-white">Результаты</h1>
          </div>
          <div className="row justify-content-center mt-4 w-100">
            {result.map((value, index) => {
              return (
                <HomeCard className="col-12 col-md-6 col-lg-4 my-5">
                  <Fade up>
                    <div className="result__card text-white text-center p-5">
                      <div>
                        <FontAwesomeIcon
                          className="display-3 mb-4"
                          icon={value.icon}
                        />
                        <p className="subtitle">{value.title}</p>
                        <p className="subtitle2 fs-4">{value.subtitle}</p>
                      </div>
                    </div>
                  </Fade>
                </HomeCard>
              );
            })}
          </div>
        </div>
      </div>

      <Lift />

      {/* icons__section */}
      <div className="home__services preim__container section__padding">
        <div className="container">
          <div className="services__title">
            <h1 className="title text-center mb-5">Преимущества</h1>
          </div>
          <div className="row justify-content-center mt-4">
            {poisk.map((value, index) => {
              return (
                <HomeCard className="col-10 col-md-6 col-lg-4 my-5">
                  <div className="preim__card  text-center p-5">
                    <Fade up>
                      <div>
                        <div className="circle">
                          <FontAwesomeIcon
                            className="display-1 mb-4 icon"
                            icon={value.icon}
                          />
                        </div>
                        <p className="subtitle fs-4">{value.title}</p>
                        <p className="subtitle2 fs-4">{value.subtitle}</p>
                      </div>
                    </Fade>
                  </div>
                </HomeCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* klient__swiper__section */}
      <div className="klient__section w-100 section__padding my-5">
        <div className="container result__opacity txet-white w-100">
          <div className="result__title">
            <h1 className="title text-center text-white">Отзывы клиентов</h1>
          </div>

          <div className="swiper__text text-center">
            <Swiper
              className="swiper__container text-center pb-5"
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {kliens.map((value, index) => {
                return (
                  <SwiperSlide className="line">
                    <h1>{value.title}</h1>
                    <p>{value.subtitle}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <PartSwiper />
    </div>
  );
};

export default Home;
