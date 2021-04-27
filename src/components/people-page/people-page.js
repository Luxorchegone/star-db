import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boudary' ;
import "./people-page.css";


const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}

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
            <PersonDetails personId={selectedPerson} />
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
