import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { Favourites } from "../../pages/Favourites/Favourites";
import { RandomDish } from "../../pages/RandomDish/RandomDish";

export const App: FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={RandomDish} exact />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  </Router>
);
