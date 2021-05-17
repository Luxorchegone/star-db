import React, {Component} from 'react';
import Row from '../row/';
import {PlanetDetails, PlanetList} from '../sw-components';

export default class PlanetPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected}/>} 
                right={<PlanetDetails itemId={selectedItem}/>} 
            /> 
        );
    }
}