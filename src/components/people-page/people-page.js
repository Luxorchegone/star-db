import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boudary' ;
import Row from '../row';
import "./people-page.css";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
    }

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        console.log(id);
        this.setState({
        selectedPerson: id,
        });
    };

    render() {
        const {selectedPerson} = this.state;

        const personDetails = (
            <ErrorBoundary>
            <ItemDetails itemId={selectedPerson} getData={this.swapiService.getPerson} />
            </ErrorBoundary>
        );

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople}
            >
             {(item) => item.name} 
            </ItemList>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}
