import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => { //Компонент список
    const {data, onItemSelected, children: renderLabel} = props;
   
    const renderItems = (arr) => { //Создаем элементы списка для помещения на страницу
        return arr.map((item) => {
            const {id} = item;
            const label = renderLabel(item);
            return (
                <li className="list-group-item" 
                key={id}
                onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    };

    const items = renderItems(data);
    return ( // Возвращаем готовый список длф размещения на страницу
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

ItemList.defaultProps = { //Значения обработчика onClick по умолчанию
    onItemSelected: () => {
        console.log('Empty function');
    }
}

ItemList.propTypes = { //пробуем Proptypes
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
}

export default ItemList;
