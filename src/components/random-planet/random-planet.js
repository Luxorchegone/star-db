import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';
import './random-planet.css';

export default class RandomPlanet extends Component { //Компонент отображающий, рандомную планету
    swapiService = new SwapiService();

    state = {
        planet: null,
        loading: true,
        error: false,
    }

    static defaultProps = { //Интервал обновления по умолчанию
        updateInterval: 7000,
    }
    
    static propTypes = { //Пробуем библиотеку Proptypes
        updateInterval: PropTypes.number 
    }

    updatePlanet = () => { 
        const id = Math.floor(Math.random() * 58) + 2; //Генерим рандомный id планеты
        
        this.swapiService.getPlanet(id) 
            .then((planet) => { //Получаем данные с сервера и пишем в стейт
                this.setState({
                    planet: planet,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({ //Если что то пошло не так... То выбросим ошибку!
                    error: true,
                    loading: false,
                });
            });
    }

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <Planet planet={planet} /> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const Planet = ({planet}) => { //Визуальный "скелет" для отображжения данных о планете
    const { population, rotationPeriod, diameter, name, id } = planet;
    
    return (
        <>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} // т.к. в основной APIшке нет изображений
            />
            <div className="planet-description">
                <h4 className="planet-name">{name}</h4>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{diameter}</span>
                </li>
                </ul>
            </div>
        </>
    );
}
