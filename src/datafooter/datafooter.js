import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputGroup, Input, InputGroupAddon } from "reactstrap";

const facebook = [
  <FontAwesomeIcon className="fs-3  mt-3 me-4" icon={faInstagram} />,
  <FontAwesomeIcon className="fs-3  mt-3 me-4" icon={faFacebook} />,
  <FontAwesomeIcon className="fs-3  mt-3 " icon={faTelegram} />,
];

export default [
  {
    colProps: "col-md-6 col-lg-4 mt-5",
    title: "О НАС",
    list: [
      {
        title:
          "«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!",
      },
      {
        title: <h1 className="fs-5 mt-2">МЫ В СОЦ.СЕТЯХ:</h1>,
      },
      { title: facebook, url: "#Templates" },
    ],
  },
  {
    colProps: "col-md-6 col-lg-4 mt-5",
    title: "ПОСЛЕДНИЕ НОВОСТИ",
    list: [
      {
        title: (
          <p
            className="footer__link"
            style={{ borderBottom: "1px solid white" }}
          >
            Построен новый лифт
          </p>
        ),
        url: "/НОВОСТИ",
      },
      {
        title: (
          <p
            className="my-3 footer__link"
            style={{ borderBottom: "1px solid white" }}
          >
            РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ
          </p>
        ),
        url: "/НОВОСТИ",
      },
      {
        title: (
          <p
            className="mt-2 footer__link"
            style={{ borderBottom: "1px solid white" }}
          >
            ДИСПЕТЧЕРИЗАЦИЯ
          </p>
        ),
        url: "/НОВОСТИ",
      },
    ],
  },
  {
    colProps: "col-md-6 col-lg-4 mt-5",
    title: "КОНТАКТЫ",
    list: [
      { title: "Номер телефона: +998 (93) 511-11-17 +998 (91) 791-51-15" },
      { title: "Электронная почта: info@uzlift.uz" },
      { title: "Адрес: 100077, город Ташкент, улица Мухаммад Юсуф 1А." },
    ],
  },
];
