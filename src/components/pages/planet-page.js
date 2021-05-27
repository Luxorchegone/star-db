import React from 'react';
import Row from '../row/';
import {PlanetDetails, PlanetList} from '../sw-components';

const PlanetPage = ({history, match}) => {
    const {id} = match.params;

    return (
        <Row 
            left={<PlanetList onItemSelected={(itemId)=>{
                history.push(itemId)
            }}/>} 
            right={<PlanetDetails itemId={id}/>} 
        /> 
    );
}
export default PlanetPage;