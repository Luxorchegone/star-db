import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-details.css";

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

        if (!this.state.item && !this.state.loading) {
            return <span>Select a item from a list </span>;
        }
        
        const {item, loading, image} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemCard item={item} image={image} /> : null;

        return (
            <div className="item-details card">
                {spinner}
                {content}
                <button onClick={()=>this.setState({error: true})}>
                    Выкинуть ошибку!
                </button>
            </div>
        );
    }
}

const ItemCard = ({item, image}) => {
    const {
        id,
        name,
        height,
        mass,
        hairColor,
        eyeColor,
        gender,
        birthYear,
    } = item;
    
    return (
        <>
            <img className="item-image"
                src={image}
                alt="item"/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Hair Color</span>
                        <span>{hairColor}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Height</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Mass</span>
                        <span>{mass}</span>
                    </li>
                </ul>
            </div>
        </>
  );
}