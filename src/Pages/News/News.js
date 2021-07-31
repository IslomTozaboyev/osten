import React from "react";
import "./News.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import PartSwiper from "../../components/PartSwiper";

const boxes = [
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-7.jpg",
    subtitle: "Построен новый лифт",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/OSTEN-ST-4.jpg",
    subtitle: "РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/OSTEN-L1.jpg",
    subtitle: "ДИСПЕТЧЕРИЗАЦИЯ",
  },
  {
    img: "https://orzu-tehnopark.s3.amazonaws.com/liftpartner.png",
    subtitle: "ПАССАЖИРСКИЕ ЛИФТЫ",
  },
];

const Proffesional = () => {
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1 className="pro__title">Новости</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">Новости</h1>
          </div>
        </div>
      </div>

      <div className="container news">
        <div className="row">
          {boxes.map((value, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="cards shadow h-100">
                  <a href="link">
                    <img className="w-100" src={value.img} alt="no photo" />
                    <h4 className="m-3 subtitle">{value.subtitle}</h4>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PartSwiper />
    </div>
  );
};

export default Proffesional;
