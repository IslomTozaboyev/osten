import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import osten from "../../img/osten.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const data = [
  { to: "/", title: "ГЛАВНАЯ" },
  { to: "/Oнас", title: "О НАС" },
  { to: "/ПРОИЗВОДСТВО", title: "ПРОИЗВОДСТВО" },
  { to: "/УСЛУГИ", title: "УСЛУГИ" },
  { to: "/ПРОДУКЦИЯ", title: "ПРОДУКЦИЯ" },
  { to: "/КОНСТРУКТОР", title: "КОНСТРУКТОР" },
  { to: "/НОВОСТИ", title: "НОВОСТИ" },
  { to: "/КОНТАКТЫ", title: "КОНТАКТЫ" },
];

const Header = () => {
  const [navshow, setnavshow] = useState(false);

  let shownav = () => {
    setnavshow(!navshow);
  };

  return (
    <header className="header shadow d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={osten} className="logo me-3 w-100" alt="rasm" />
        </Link>

        <div
          className={`d-flex align-items-center menu ${
            (navshow && "hidenav") || ""
          }`}
        >
          {data.map((value, index) => (
            <NavLink
              exact
              to={value.to}
              className="navlink"
              activeClassName="main__navActive"
              key={value.to}
            >
              {value.title}
            </NavLink>
          ))}
        </div>
        <button className="bars" onClick={shownav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
