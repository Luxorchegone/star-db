import React from 'react';
import {Redirect} from 'react-router-dom';  

const SecretPage = ({isLoggedIn}) => { //"Секретная" страница, не доступная если пользователь не залогинился
    if(isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>This page is full of secrets</h3>
            </div>
        );
    }
    return <Redirect to="/login" /> //Редирект, если пользователь не залогинился
}
export default SecretPage;