import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./person-details.css";

export default class PersonDetails extends Component {
  swappiService = new SwapiService();

    state = {
        person: null,
        loading: false,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.setState({
            loading: true,
        });

        this.swappiService.getPerson(personId).then((person) => {
            this.setState({
                person: person,
                loading: false,
            });
        });
    }

    render() {
        if (this.state.error) { //почистить 
            this.foo.bar = 0;
        }

        if (!this.state.person && !this.state.loading) {
            return <span>Select a person from a list </span>;
        }
        
        const { person, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonCard person={person} /> : null;

        return (
            <div className="person-details card">
                {spinner}
                {content}
                <button onClick={()=>this.setState({error: true})}>
                    Выкинуть ошибку!
                </button>
            </div>
        );
    }
}

const PersonCard = ({ person }) => {
    const {
        id,
        name,
        height,
        mass,
        hairColor,
        eyeColor,
        gender,
        birthYear,
    } = person;
    
    return (
        <>
            <img className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt="person"/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Hair Color</span>
                        <span>{hairColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Mass</span>
                        <span>{mass}</span>
                    </li>
                </ul>
            </div>
        </>
  );
}