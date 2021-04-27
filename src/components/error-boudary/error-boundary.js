import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component { //Компонент обертка
    state ={
        error: false
    }

    componentDidCatch() {
        this.setState({
                error: true
            });
    }
    
    render() {

        if (this.state.error) { //Если обернутый компонент выкинул ошибку, покажем вместо него ErrorIndicator
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}