import React from 'react';

const { //Провайдер и консюмер для пробрасывания сервисов в компоненты приложения
    Provider: SwapiServiceProvider, 
    Consumer: SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceConsumer,
    SwapiServiceProvider
}