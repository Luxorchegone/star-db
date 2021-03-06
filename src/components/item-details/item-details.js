import React, {Component} from 'react';
import Spinner from '../spinner';
import './item-details.css';

const Record = ({item, field, label}) => { //Поле для компонента отображающего планету/корабль/персонажа
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
} 
export {Record};

export default class ItemDetails extends Component { //Компонент отображающий планету/корабль/персонажа
    state = {
        item: null,
        image: null,
        loading: false,
    }

    componentDidMount() { //Получаем данные с сервера и пишем в стейт
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true,
        });

        getData(itemId).then((item) => {
            this.setState({
                item: item,
                image: getImageUrl(item),
                loading: false,
            });
        });
    }

    render() {       
        const {item, loading, image} = this.state;

        if (!item && !loading) { //Если не выбрана планета/персонаж/корабль
            return <span>Select a item from a list </span>;
        }      

        if (loading) {
            return <Spinner/>
        }
        
        const {name} = item;

        return ( //Отображаем планету/персонажа/корабль
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="item"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}