import React from 'react';
import Row from '../row/';
import {PersonDetails, PersonList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../error-boudary';

const PeoplePage = ({history, match}) => { //Компонент со списком персонажей и их описанием
    const {id} = match.params;    
    return (
        <Row 
            left={
                <ErrorBoundary>
                    <PersonList onItemSelected={(itemId) => {
                        history.push(itemId);
                    }}/>
                </ErrorBoundary>
            } 
            right={
                <ErrorBoundary>
                    <PersonDetails itemId={id}/>
                </ErrorBoundary>
            } 
        /> 
    );
}
export default withRouter(PeoplePage);