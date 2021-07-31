import React from "react";
import "./Contact.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";

const Proffesional = () => {
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1 className="pro__title">Контакты</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">Контакты</h1>
          </div>

          <iframe
            className="my-5"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab69d6935f72eece21fc77a87325658c76b065f9b2290091171f9c1993675b083&source=constructor&scroll=false"
            frameborder="0"
            width="100%"
            height="560px"
          ></iframe>

          <div className="">
            <h3>Режим работы с 09:00 до 18:00</h3>
          </div>

          <div className="row">
            <div className="col-md-4 mt-3">
              <b>Наш адрес: </b> город Ташкент ...
            </div>
            <div className="col-md-4 mt-3">
              <b>Телефон: </b> (+99897) 123-45-67, (+99897) 123-45-67
            </div>
            <div className="col-md-4 mt-3">
              <b>Emai: </b> info@lift.uz
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-8 col-lg-5">
              <form action="#">
                <label className="form-label mt-3" for="name">
                  Ваше имя (обязательно)
                </label>
                <input type="text" className="form-control" />
                <label className="form-label mt-3" for="name">
                  Ваш e-mail (обязательно)
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="form-control"
                />
                <label className="form-label mt-3" for="name">
                  Сообщение
                </label>
                <textarea
                  required
                  className="form-control"
                  id="messege"
                  cols="10"
                  rows="2"
                ></textarea>
                <div className="text-center mt-3">
                  <button className="btn text-white">Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proffesional;
