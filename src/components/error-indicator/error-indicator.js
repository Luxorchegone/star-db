import React from 'react';
import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => { //Наш компонент - индикатор ошибки
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>Something has gone terribly wrong</span>
            <span>(bot we already sent droids to fix it)</span>
        </div>            
    );      
}
export default ErrorIndicator;              