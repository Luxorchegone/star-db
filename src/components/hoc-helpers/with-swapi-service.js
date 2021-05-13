import React from 'react';
import {SwapiServiceConsumer, SwapiserviceProvider} from '../swapi-service-context';

const withSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiserviceProvider>
                {
                    (swapiService) => {
                        return (
                            <Wrapped {...props} swapiService={swapiService}/>
                        )
                    }
                }
            </SwapiserviceProvider>
        );
    }  
}

export default withSwapiService;