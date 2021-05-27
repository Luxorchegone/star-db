import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => { //Компонент-описание планеты
    return (
        <ItemDetails 
            {...props}>
            <Record field='population' label='Population:'/>
            <Record field='diameter' label='Diameter:'/> 
            <Record field='rotationPeriod' label='Rotation period:'/>      
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => { //Переименовываем сервисы для унификации
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps); 