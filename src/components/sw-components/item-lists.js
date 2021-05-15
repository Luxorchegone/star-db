import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

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

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService( //Еще раз оборачивам, но уже для передачи сервисов в ItemList
    withData(ListWithChildren), 
    mapPersonMethodsToProps
    ); 

const PlanetList = withSwapiService( //Еще раз оборачивам, но уже для передачи сервисов в ItemList
    withData(ListWithChildren),
    mapPlanetMethodsToProps 
    );

const StarshipList = withSwapiService( //Еще раз оборачивам, но уже для передачи сервисов в ItemList
    withData(ListWithChildren),
    mapStarshipMethodsToProps 
    );

export {
    PersonList,
    PlanetList,
    StarshipList
}