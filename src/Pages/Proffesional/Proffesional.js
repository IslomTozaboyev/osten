import React from "react";
import "./Proffesional.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row } from "react-bootstrap";
import Connet from "../../components/Connet/Connet";
import list from "../../img/list.jpg";
import list2 from "../../img/list2.jpg";
import list3 from "../../img/list3.jpg";
import list4 from "../../img/list4.jpg";
import list5 from "../../img/list5.jpg";

const lists = [
  {
    title: "Пассажирские лифты",
    subtitle:
      "Пассажирский лифт – это подъемный механизм, без которого почти невозможно представить себе высотное здание, а первый такой подъемник был установлен в Нью-Йорке еще в 1857 году. Устройство безопасности для лифтов Э.Г. Отиса, в сочетании с использованием стальных каркасов зданий, дало возможность строить высотные здания. С тех пор лифты постоянно совершенствуются и улучшаются, но для регулярных тестов требуются специальные высотные сооружения. Одним из таких сооружений является испытательная башня OSTEN.",
    title2: "Пассажирский лифт-профиль",
    subtitle2:
      "В небольшом машинном отделении, пассажирский лифт Osten имеет только около 65% - 70% от традиционного машинного отделения. Это значи- тельно экономит строительное пространство и материал. Шкаф управления в машинном отделении выполнен в однослойной компоновке. Основная опорная балка может также использоваться в качестве сцепной пластины, что в значительной степени экономит пространство машинного отделения. По сравнению с традиционными лифтами, при условии обеспечения рабочего пространства, предусмотренного национальным стандартом, он эффективно контролирует высоту машинного отделения. Интенсивный эффект пространства дает больше свободы для архитекто- ров. Это предоставляет более широкое использова- ние пространства для строительства. Прекрасно сочетается с архитектурным стилем.",
    img: list,
    title3: "Меньше занимаемого места, более устойчивая конструкция",
    subtitle3:
      "По сравнению с лифтом с машинным отделением от Osten, машинное отделение является лишь продол- жением лифта. Это обеспечивает более удобную установку, а также более низкую стоимость.",
    title4: "Впечатляющая экономия энергии",
    subtitle4:
      "По сравнению с традиционной тяговой машиной, небольшой машинный лифт Osten потребляет мень- ше энергии и меньше потерь тепловой энергии.",
    img2: list2,
  },
];

const lists2 = [
  {
    title: "Лифт для коттеджей",
    subtitle:
      "Лифты Osten, предназначенные для коттеджей, придерживаются идеи дизайна защиты окружающей среды и энергосбережения, а также в настоящее время объединяются с новейшей лифтовой технологией для обеспечения безопасности и надежности продуктов компании. Элегантно спроектированная кабина лифта, тонкая и изысканная техника демонстрируют выдающуюся производительность лифтов Osten данной серии.",
  },
  { img: list3 },
  { img: list4 },
  { img: list5 },
];

const Proffesional = () => {
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1>Производство</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">Производство</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="first">
                    Пассажирские лифты
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="second">
                    Лифт для коттеджей
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="thirth">
                    Больничный лифт
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="four">
                    Грузовой лифт
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists.map((value, index) => {
                        return (
                          <div>
                            <h5 className="title fw-bold">{value.title}</h5>
                            <p className="subtitle">{value.subtitle}</p>
                            <h5 className="title fw-bold">{value.title2}</h5>
                            <p className="subtitle">{value.subtitle2}</p>
                            <img
                              className="w-50 my-4"
                              src={value.img}
                              alt="rasm"
                            />
                            <h5 className="title fw-bold">{value.title3}</h5>
                            <p className="subtitle">{value.subtitle3}</p>
                            <h5 className="title fw-bold">{value.title4}</h5>
                            <p className="subtitle">{value.subtitle4}</p>
                            <img
                              className="w-75 mb-5"
                              src={value.img2}
                              alt="rasm"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Connet>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists2.map((value, index) => {
                        return (
                          <div>
                            <h5 className="title fw-bold">{value.title}</h5>
                            <p className="subtitle">{value.subtitle}</p>
                            <img className="w-100 my-4" src={value.img} />
                          </div>
                        );
                      })}
                    </div>
                  </Connet>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Proffesional;
