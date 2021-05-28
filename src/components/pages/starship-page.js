import React from 'react';
import {StarshipList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../error-boudary';

const StarshipPage = ({history}) => { //Компонент со списком кораблей и их описанием
    return (
        <ErrorBoundary>
            <StarshipList onItemSelected={(itemId) => {
                history.push(itemId);
            }}/>
        </ErrorBoundary>
    );
}
export default withRouter(StarshipPage);