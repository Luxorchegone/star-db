import React, { Component } from "react";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
import Spinner from "../spinner";

import "./app.css";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: null,

  };

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson, showRandomPlanet } = this.state;

    return (
      <div className="app-wrapper">
        <Header />
        <RandomPlanet />
        <ItemList onItemSelected = {this.onPersonSelected}/>
        <PersonDetails personId={selectedPerson}/>
      </div>
    );
  }
}
