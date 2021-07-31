import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Header from "./containers/Header";
import Services from "./Pages/Services";
import Product from "./Pages/Product";
import КОНСТРУКТОР from "./Pages/КОНСТРУКТОР";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Footer from "./containers/Footer";
import data from "./datafooter/datafooter";
import About from "./Pages/About";
import Proffesional from "./Pages/Proffesional";

const routers = [
  { path: "/", component: <Home />, exact: true },
  { path: "/Oнас", component: <About /> },
  { path: "/ПРОИЗВОДСТВО", component: <Proffesional /> },
  { path: "/УСЛУГИ", component: <Services /> },
  { path: "/ПРОДУКЦИЯ", component: <Product /> },
  { path: "/КОНСТРУКТОР", component: <КОНСТРУКТОР /> },
  { path: "/НОВОСТИ", component: <News /> },
  { path: "/КОНТАКТЫ", component: <Contact /> },
  { component: <Error404 /> },
];

function App() {
  return (
    <div>
      <Header />

      <Switch>
        {routers.map((value, index) => (
          <Route exact={value.exact} path={value.path} key={value.exact}>
            {value.component}
          </Route>
        ))}
      </Switch>

      {/* <Route exact path="/">
           <Home/>
        </Route>

        <Route  path="/about">
          <About/>
        </Route>

        <Route  path="/dashboard">
           <Dashboard/>
        </Route>

        <Route>
          <Error404/>
        </Route> */}

      <Footer data={data} colProps="col-6 col-lg-6" />
    </div>
  );
}

export default App;
