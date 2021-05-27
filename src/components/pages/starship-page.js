import React from 'react';
import {StarshipList} from '../sw-components';
import {withRouter} from 'react-router-dom'

const StarshipPage = ({history}) => { //Компонент со списком кораблей и их описанием
    return (
        <StarshipList 
        onItemSelected={(itemId) => {
            history.push(itemId);
        }}/>
    );
}
export default withRouter(StarshipPage);