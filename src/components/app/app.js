import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundary from '../error-boudary';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {StarshipDetails} from '../sw-components';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    SecretPage,
    LoginPage} from '../pages';
import "./app.css";

export default class App extends Component {
    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState(({isLoggedIn}) => {
            const isLoggedInNew = !isLoggedIn
            return {
                isLoggedIn: isLoggedInNew
            }
        });
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

        const {isLoggedIn} = this.state;
        
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="app-wrapper">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Route path="/" 
                                   render={()=><h2>Welcome to StarDB</h2>} 
                                   exact />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" 
                                   component={StarshipPage} 
                                   exact/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params;
                                       return <StarshipDetails itemId={id} /> 
                                   }} 
                                   exact />
                            <Route path="/login" 
                                   render={() => (
                                       <LoginPage isLoggedIn={isLoggedIn}
                                                  onLogin={this.onLogin} />
                                   )} />
                            <Route path="/secret" 
                                   render={() => (
                                       <SecretPage isLoggedIn={isLoggedIn} />
                                )} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }                 
}
