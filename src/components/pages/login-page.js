import React from 'react';

const LoginPage = ({isLoggedIn, onLogin}) => {
    let btnText = isLoggedIn ? 'Log out' : 'Log in';

    return (
        <div className="jumbotron">
            <p>Login to see secret page!</p>
            <button
                className="btn btn-primary"
                onClick={onLogin}>
                {btnText}
            </button>
        </div>
    );
} 
export default LoginPage;