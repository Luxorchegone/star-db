import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { //Для удобства деструктуризируем наши сервисы
    getAllPeople,
    getAllPlanets,
    getAllStarships,
} = swapiService;

const withChildFunction = (Wrapped, func) => { //Передаем компонентам нашу рендер-функцию
    return (props) => {
        return (
            <Wrapped {...props}> 
                {func}
            </Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>; //Наша рендер-функция

const ListWithChildren = withChildFunction(ItemList, renderName); //Оборачиваем ItemList что бы передать рендер-функцию 

const PersonList = withData(ListWithChildren, getAllPeople); //Еще раз оборачивам, но уже для передачи сервисов в ItemList
const PlanetList = withData(ListWithChildren, getAllPlanets); //Еще раз оборачивам, но уже для передачи сервисов в ItemList
const StarshipList = withData(ListWithChildren, getAllStarships); //Еще раз оборачивам, но уже для передачи сервисов в ItemList

export {
    PersonList,
    PlanetList,
    StarshipList
}