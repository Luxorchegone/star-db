import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc-helpers';
import {Link} from 'react-router-dom';
import './starship-details.css';

const StarshipDetails = (props) => { //Компонент-описание корабля
    return (
        <>
            <ItemDetails 
                {...props}>
                <Record field='model' label='Model:'/>
                <Record field='manufacturer' label='Manufacturer:'/> 
                <Record field='crew' label='Crew:'/>
            </ItemDetails>
            <Link className="back-button btn btn-lg btn-primary" to="/starships/">Go back!</Link>
        </>
        
    );
}

const mapMethodsToProps = (swapiService) => { //Переименовываем сервисы для унификации
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps); 