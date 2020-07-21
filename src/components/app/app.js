import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  render() {
    const { selectedPerson, showRandomPlanet } = this.state;

    return (
      <div className="app-wrapper">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
