import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./item-list.css";

export default class ItemList extends Component {
    state = {
        itemList: null,
    }

    onItemsLoaded = (itemList) => { //Пишем в стейт
        this.setState({
            itemList: itemList,
        });
    }
 
    componentDidMount() { //Получаем данные с сервера и пишем в стейт
        const {getData} = this.props;
        getData().then(this.onItemsLoaded);
    }

    renderItems(arr) { //Создаем список для помещения на страницу
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.children(item);
            return (
                <li className="list-group-item" 
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner />;
        }

        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
