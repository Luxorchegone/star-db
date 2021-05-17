import React, {Component} from 'react';
import Row from '../row/';
import {StarshipDetails, StarshipList} from '../sw-components';

export default class StarshipPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (id) => { //Обработчик id выбранного персонажа, который пишем в стейт
        this.setState({
        selectedItem: id,
        });
    };

    render() {
        const {selectedItem} = this.state;
        return (
            <Row 
                left={<StarshipList onItemSelected={this.onItemSelected}/>} 
                right={<StarshipDetails itemId={selectedItem}/>} 
            /> 
        );
    }
}