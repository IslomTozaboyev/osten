import React from "react";
import "./Proffesional.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row } from "react-bootstrap";
import Connet from "../../components/Connet/Connet";
import PartSwiper from "../../components/PartSwiper";
import list from "../../img/list.jpg";
import list2 from "../../img/list2.jpg";
import list3 from "../../img/list3.jpg";
import list4 from "../../img/list4.jpg";
import list5 from "../../img/list5.jpg";
import list6 from "../../img/list6.jpg";
import list7 from "../../img/list7.jpg";
import list8 from "../../img/list8.jpg";
import list9 from "../../img/list9.jpg";

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

const lists3 = [
  {
    title: "Больничный лифт",
    subtitle: `Больничный лифт часто используется в огромных лечебных заведениях, современных лечебных центрах, санаториях, центрах медикосанитарной помощи и т. д., где лечение больных и спасение умирающих является основной обязанностью. Серия больничных лифтов Osten придерживается гуманного подхода, применяет технологию группового наблюдения из экспертной системы, а также сокращает время ожидания пациентов до минимума.`,
  },
  { img: list6 },
  { img: list7 },
];

const lists4 = [
  {
    title: "Грузовой лифт",
    subtitle: `Грузовой лифт Osten использует передовую технологию синхронного безредукторного тягового усилия с постоянными магнитами, без машинного отделения. Тяговая машина имеет преимущество в малом весе, малом объеме, экономит архитектурное пространств
    о, значительно повышает производительность и качество, снижает энергопотребление, частоту отказов.`,
    description:
      "Грузовой лифт Osten с меньшей высотой вала, уменьшает высоту конструкции фабрик и других зданий, может отвечать фактическим потребностям коммерческой. Самый лучший выбор для перевозки товаров на фабриках, складах, универмагах, центрах недвижимости, библиотек и т.д.",
  },
  { img: list8 },
  { img: list9 },
];

const Proffesional = () => {
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1 className="pro__title">Производство</h1>
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
            <Col className="mb-5" sm={4}>
              <Nav className="mb-5" variant="pills" className="flex-column">
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
            <Col sm={8}>
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

                <Tab.Pane eventKey="thirth">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists3.map((value, index) => {
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

                <Tab.Pane eventKey="four">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists4.map((value, index) => {
                        return (
                          <div>
                            <h5 className="title fw-bold">{value.title}</h5>
                            <p className="subtitle">{value.subtitle}</p>
                            <p className="subtitle">{value.description}</p>
                            <img className="w-75 my-4" src={value.img} />
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
      <PartSwiper />
    </div>
  );
};

export default Proffesional;
