import React from "react";
import "./item-list.css";

const ItemList = (props) => { //Функция отвечающая за отрисовку компонента
    const {data, onItemSelected, children: renderLabel} = props;
   
    const renderItems = (arr) => { //Создаем список для помещения на страницу
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
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}
export default ItemList;
