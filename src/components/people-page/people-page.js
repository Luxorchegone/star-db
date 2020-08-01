import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
