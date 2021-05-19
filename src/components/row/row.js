import React from 'react';
import PropTypes from 'prop-types';

const Row = ({left, right}) => { //Компонент-скелет для других компонентов
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
}

Row.propTypes = { //пробуем библиотеку Proptypes
    left: PropTypes.node,
    right: PropTypes.node,
}

export default Row;
