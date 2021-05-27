import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => { //Обертка для передачи сервисов нашим компонентам
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService); //Переименовываем сервисы для удобства

                        return (
                            <Wrapped {...props} {...serviceProps}/> //Возвращаем компонент обернутый в консюмер
                        )
                    }
                }
            </SwapiServiceConsumer>
        );
    }  
}
export default withSwapiService;