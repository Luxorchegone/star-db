import React from 'react';

const { 
    Provider: SwapiserviceProvider, 
    Consumer: SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceConsumer,
    SwapiserviceProvider
}