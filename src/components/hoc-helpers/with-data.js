import React, {Component} from 'react';
import Spinner from "../spinner";

const withData = (View) => {//Функция отвечающая за логику компонента
    return class extends Component {
        state = {
            data: null,
            loading: false,
            error: false
        }
    
        update = () => { //Получаем данные и пишем их в стейт
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data: data,
                    });
                });
        }
     
        componentDidMount() { //Получаем данные с сервера и пишем в стейт
            this.update();
        }
        
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
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