import React from "react";
import "./Services.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row } from "react-bootstrap";
import Connet from "../../components/Connet/Connet";
import PartSwiper from "../../components/PartSwiper";

const lists2 = [
  {
    subtitle: `Монтаж лифтового оборудования производится в согласованные с клиентом сроки.
       Специалисты компании произведут все необходимые диагностические и пуско- наладочные работы.`,
    title: "Преимущества монтажа",

    li: "Контактное лицо для каждого проекта по монтажу лифтового и эскалаторного оборудования",
  },
  { li: "Профессиональные консультации на каждом этапе монтажа оборудования" },
];

const lists3 = [
  {
    subtitle: `Качественное техническое обслуживание лифтового оборудования, лифтов, эскалаторов и конвейеров подразумевает прозрачность, гибкость и регулярность осмотра механизмов и электроники. Мы гарантируем высокую работоспособность Вашего лифтового и подъемного оборудования, быструю поставку качественных запасных частей.`,
  },
  {
    subtitle: `Специалисты проведут все необходимые диагностические работы, произведут пуско-наладочные работы, подготовят механизм к работе, устранят любые возможные неполадки. А предотвратить ранний выход оборудования и запчастей из строя поможет система мониторинга, которую мы рекомендуем ставить нашим клиентам.`,
  },
  {
    subtitle: `Мы сделаем все, чтобы Ваше лифтовое и эскалаторное оборудование работало. И хотели бы еще раз напомнить, что регулярное техническое обслуживание лифтов и лифтового оборудования позволят существенно продлить срок службы и повысить безопасность. Доверьте ремонт и обслуживание лифтов профессионалам.`,
  },
];

const lists4 = [
  {
    title:
      "Если Ваше лифтовое и эскалаторное оборудование вышло из строя — мы быстро поможем решить Вашу проблему",
    subtitle: `Благодаря заводу MLS всегда оперативно доступны запасные части для лифтов, эскалаторов, пассажирских конвейеров.`,
  },
];

const lists5 = [
  {
    content: "content",
    subtitle: `Качественный ремонт лифтового оборудования, лифтов, эскалаторов и траволаторов. Мы гарантируем высокую работоспособность Вашего лифтового и эскалаторного оборудования, быстрое устранение неисправностей и поставку качественных запасных частей.`,
  },
  {
    subtitle: `Наша компания предлагает услуги по техническому обслуживанию и ремонту лифтов. Специалисты компании «MLS» осуществляют ремонт любых типов лифтов, включая пассажирские, грузовые, панорамные, коттеджные лифты и даже сложные подъемные механизмы. С полным перечнем ремонтируемого оборудования можно ознакомиться в разделе каталог. В штате работают квалифицированные сотрудники, которые в кратчайшие сроки произведут ремонт лифта, даже если он требует капитального ремонта, и подготовят механизм к работе, при этом простой в работе оборудования будет минимальным.`,
  },
  {
    subtitle: `Ремонт лифтов будет произведен строго в согласованные с клиентом сроки. У нас всегда выгодные тарифы на ремонт лифтов, а сроки ремонта напрямую зависит от сложности заказа – требуется ли комплексный ремонт лифтового оборудования или лишь замена какой-то одной детали.`,
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
                <h1 className="pro__title">Услуги</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">Услуги</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col className="mb-5" sm={3}>
              <Nav className="mb-5" variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="first">
                    Проектирование
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="second">
                    Монтаж лифтов и лифтового оборудования
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="thirth">
                    Техническое обслуживание лифтов и лифтового оборудования
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="four">
                    Запасные части
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="list__text" eventKey="fifth">
                    Ремонт лифтов и лифтового оборудования
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Connet>
                    <div className="list__group mb-5">
                      <p className="subtitle">
                        У нас Вы можете заказать любой проект лифтового
                        оборудования а так же дизайн, эксклюзивные лифты на
                        заказ по желанию клиента.
                      </p>
                    </div>
                  </Connet>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists2.map((value, index) => {
                        return (
                          <div>
                            <p className="subtitle">{value.subtitle}</p>
                            <h5 className="title fw-bold">{value.title}</h5>
                            <ul>
                              <li>{value.li}</li>
                            </ul>
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
                            <p className="subtitle">{value.subtitle}</p>
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
                          </div>
                        );
                      })}
                    </div>
                  </Connet>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <Connet>
                    <div className="list__group mb-5">
                      {lists5.map((value, index) => {
                        return (
                          <div>
                            <p>{value.content}</p>
                            <p className="subtitle">{value.subtitle}</p>
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
