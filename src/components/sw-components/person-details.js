import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => { //Компонент-описание персонажа
    return (
        <ItemDetails 
            {...props}>
            <Record field='gender' label='Gender:'/>
            <Record field='birthYear' label='Birth year:'/> 
            <Record field='height' label='Height:'/> 
            <Record field='mass' label='Mass:'/>
            <Record field='eyeColor' label='Eye color:'/>    
            <Record field='hairColor' label='Hair color:'/>    
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) => {  //Переименовываем сервисы для унификации
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps); 