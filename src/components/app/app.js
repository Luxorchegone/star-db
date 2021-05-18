import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import {SwapiServiceProvider} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundary from '../error-boudary';
import "./app.css";

export default class App extends Component {
    state = {
        swapiService: new SwapiService(),
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
        const Service = swapiService instanceof SwapiService ? 
            DummySwapiService : SwapiService;
            
            return {
                swapiService: new Service()
            }
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="app-wrapper">
                    <SwapiServiceProvider value={this.state.swapiService}>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </SwapiServiceProvider>
                </div>
            </ErrorBoundary>
        );
    }                 
}
