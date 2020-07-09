import React, {Component} from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';

import './app.css';




export default class App extends Component {
    render() {
        return (
            <div className="app-wrapper"> 
            <Header/>
            <RandomPlanet/>
            <ItemList/>
            <PersonDetails/>
            
             </div>
        );
    };
}; 