import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {//Функция отвечающая за логику компонента
    return class extends Component {
        state = {
            data: null,
        }
    
        onItemsLoaded = (data) => { //Пишем в стейт
            this.setState({
               data: data,
            });
        }
     
        componentDidMount() { //Получаем данные с сервера и пишем в стейт
            getData().then(this.onItemsLoaded);
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner />;
            }

            return <View {...this.props} data={data}/>; //Возвращаем наш компонент и отдаем ему данные, полученные ранее с сервера
        }
    }
}

export default withData;