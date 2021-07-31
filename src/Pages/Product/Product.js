import React from "react";
import "./Product.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Nav, Row } from "react-bootstrap";
import Connet from "../../components/Connet";
import PartSwiper from "../../components/PartSwiper";

const Proffesional = () => {
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1 className="pro__title">ПРОДУКЦИЯ</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">ПРОДУКЦИЯ</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 nav-item-active"
        >
          <Tab eventKey="home bg-dark" title="Поручни лифтов">
            <Connet></Connet>
          </Tab>
          <Tab eventKey="profile" title="Опции">
            <Connet></Connet>
          </Tab>
          <Tab eventKey="contact" title="Кабины лифтов">
            <Connet>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center my-5">
                  <div className="product__box">
                    <img
                      className="rasm w-100"
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                      alt="rasm"
                    />
                    <h3 className="osten__text">Osten l1</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                  <div className="product__box">
                    <img
                      className="rasm w-100"
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"
                      alt="rasm"
                    />
                    <h3 className="osten__text">OSTEN L2</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                  <div className="product__box">
                    <img
                      className="rasm w-100 "
                      src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"
                      alt="rasm"
                    />
                    <h3 className="osten__text">OSTEN L3</h3>
                  </div>
                </div>
              </div>
            </Connet>
          </Tab>
        </Tabs>
      </div>

      <PartSwiper />
    </div>
  );
};

export default Proffesional;
