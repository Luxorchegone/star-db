import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-details.css";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
} 

export {Record};

export default class ItemDetails extends Component {
  swappiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
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
        if (this.state.error) { //почистить 
            this.foo.bar = 0;
        }
        
        const {item, loading, image} = this.state;

        if (!item && !loading) {
            return <span>Select a item from a list </span>;
        }      

        if (loading) {
            return <Spinner/>
        }
        
        const {name} = item;

        return (
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
                <button onClick={()=>this.setState({error: true})}>
                    Выкинуть ошибку!
                </button>
            </div>
        );
    }
}

// const ItemCard = ({item, image, children}) => {
//     const {
//         id,
//         name,
//         height,
//         mass,
//         hairColor,
//         eyeColor,
//         gender,
//         birthYear,
//     } = item;
    
//     return (
        
//   );
// }