import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import Header from './containers/Header';
import ПРОИЗВОДСТВО from "./Pages/ПРОИЗВОДСТВО";
import Oнас from "./Pages/Oнас";
import УСЛУГИ from "./Pages/УСЛУГИ";
import ПРОДУКЦИЯ from "./Pages/ПРОДУКЦИЯ";
import КОНСТРУКТОР from "./Pages/КОНСТРУКТОР";
import НОВОСТИ from "./Pages/НОВОСТИ";
import КОНТАКТЫ from "./Pages/КОНТАКТЫ";

const routers = [
  {path: "/", component: <Home/>, exact: true},
  {path: "/Oнас", component:  <Oнас/>},
  {path: "/ПРОИЗВОДСТВО", component: <ПРОИЗВОДСТВО /> },
  {path: "/УСЛУГИ", component: <УСЛУГИ /> },
  {path: "/ПРОДУКЦИЯ", component: <ПРОДУКЦИЯ /> },
  {path: "/КОНСТРУКТОР", component: <КОНСТРУКТОР /> },
  {path: "/НОВОСТИ", component: <НОВОСТИ /> },
  {path: "/КОНТАКТЫ", component: <КОНТАКТЫ /> },
  {component: <Error404/>},
]


function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        {routers.map((value, index) => 
           <Route exact={value.exact} path={value.path} key={value.exact}>
          {value.component}
          </Route>)
        }

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

    </Switch>
    </div>
  );
}

export default App;
