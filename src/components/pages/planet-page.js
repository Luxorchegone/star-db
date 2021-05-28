import React from 'react';
import Row from '../row/';
import {PlanetDetails, PlanetList} from '../sw-components';
import ErrorBoundary from '../error-boudary';

const PlanetPage = ({history, match}) => {
    const {id} = match.params;

    return (
        <Row 
            left={
                <ErrorBoundary>
                    <PlanetList onItemSelected={(itemId) => {
                        history.push(itemId);
                    }}/>
                </ErrorBoundary>
            } 
            right={
                <ErrorBoundary>
                    <PlanetDetails itemId={id}/>
                </ErrorBoundary>
            } 
        /> 
        
        
    );
}
export default PlanetPage;