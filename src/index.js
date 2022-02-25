import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import homepage from './homepage';
import giardino from './giardino';
import percorsovirgiliano from './percorso_virgiliano';
import angiosperme from "./angiosperme/index";
import arboreto from "./arboreto/index";
import area_ginestra from "./area_ginestra/index";
import gimnosperme from "./gimnosperme/index";
import macchia_mediterranea from "./macchia_mediterranea/index";
import piante_aromatiche from "./piante_aromatiche/index";
import viale_allori from "./viale_allori/index";
import viale_lecci from "./viale_lecci/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homepage} />
      <Route exact path="/giardino" component={giardino} />
      <Route exact path="/percorsovirgiliano" component={percorsovirgiliano} />
      <Route exact path="/angiosperme" component={angiosperme} />
      <Route exact path="/arboreto" component={arboreto} />
      <Route exact path="/area_ginestra" component={area_ginestra} />
      <Route exact path="/gimnosperme" component={gimnosperme} />
      <Route exact path="/macchia_mediterranea" component={macchia_mediterranea} />
      <Route exact path="/piante_aromatiche" component={piante_aromatiche} />
      <Route exact path="/viale_allori" component={viale_allori} />
      <Route exact path="/viale_lecci" component={viale_lecci} />
      <Route path="*" component={homepage} />
    </Switch>
  </BrowserRouter>,
  rootElement
);