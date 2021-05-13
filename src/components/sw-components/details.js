import React from "react";
import ItemDetails, {Record} from '../item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId} 
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field='gender' label='Gender:'/>
                            <Record field='birthYear' label='Birth year:'/> 
                            <Record field='height' label='Height:'/> 
                            <Record field='mass' label='Mass:'/>
                            <Record field='eyeColor' label='Eye color:'/>    
                            <Record field='hairColor' label='Hair color:'/>    
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
}

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails 
                            itemId={itemId} 
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>
                            <Record field='population' label='Population:'/>
                            <Record field='diameter' label='Diameter:'/> 
                            <Record field='rotationPeriod' label='Rotation period:'/>      
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>        
    );
}

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails 
                            itemId={itemId} 
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                            <Record field='model' label='Model:'/>
                            <Record field='manufacturer' label='Manufacturer:'/> 
                            <Record field='crew' label='Crew:'/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}