import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {//Функция отвечающая за логику компонента
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false,
        }
    
        update = () => { 
            this.setState({ //"Начинаем" загрузку данных с сервера
                loading: true,
            });
           
            this.props.getData() 
                .then((data) => { //Получаем данные с сервера и пишем в стейт
                    this.setState({
                        data: data,
                        loading: false,
                    });
                })
                .catch(() => {
                    this.setState({ //Если что то пошло не так... То выбросим ошибку!
                        error: true,
                        loading: false,
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
            const {data, error, loading} = this.state;

            if (loading) {
                return <Spinner />;
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data}/>; //Возвращаем наш компонент и отдаем ему данные, полученные ранее с сервера
        }
    }
}

export default withData;