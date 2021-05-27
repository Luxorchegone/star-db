export default class DummySwapiService { 

    // 'ТЕСТОВЫЙ' сервис, для имитации отладки, на скорую руку. 

    _apiBase = 'https://swapi.dev/api'; //'База' нашей апишки
    _imgBase = 'https://starwars-visualguide.com/assets/img/';//'База' апишки c изображениями

    getResourse = async (url) => { //Получем json с интересующими нас данными или ошибку, если что то пошло не так
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getAllPeople = async () => { //Получаем список персонажей и преобразуем его в удобный формат
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => { //Получаем персонажа и преобразуем его в удобный формат
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => { //Получаем список планет и преобразуем его в удобный формат
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => { //Получаем планету и преобразуем её в удобный формат
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => { //Получаем список кораблей и преобразуем его в удобный формат
        const res = await this.getResourse(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => { //Получаем корабль и преобразуем его в удобный формат
        const starship = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship);
    }


    getPersonImage = ({id}) => {
        return `${this._imgBase}planets/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imgBase}planets/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imgBase}planets/${id}.jpg`
    }

    _extractId = (item) => { //Достаем id из строки
        const isRegExp = /\/([0-9]*)\/$/;
        return item.url.match(isRegExp)[1];
    }

    _transformPlanet = (planet) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(planet),
            name: `ТЕСТ: ${planet.name}`,
            population: `ЧИСЛЕННОСТЬ ТЕСТОВЫЙ!!!`,
            rotationPeriod: `ДЛИТЕЛЬНОСТЬ СУТОК ТЕСТОВЫЙ!!!`,
            diameter: `ДИАМЕТР ТЕСТОВЫЙ!!!`,
        }
    }

    _transformPerson = (person) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(person),
            name: `ТЕСТ: ${person.name}`,
            height: `РОСТ ТЕСТОВЫЙ!!!`,
            mass: `ВЕС ТЕСТОВЫЙ!!!`,
            hairColor: `ЦВЕТ ВОЛОС ТЕСТОВЫЙ!!!`,
            eyeColor: `ЦВЕТ ГЛАЗ ТЕСТОВЫЙ!!!`,
            gender: `ПОЛ ТЕСТОВЫЙ!!!`,
            birthYear: `ДАТА РОЖДЕНИЯ ТЕСТОВЫЙ!!!`,
        }
    }

    _transformStarship = (starship) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(starship),
            name: `ТЕСТ: ${starship.name}`,
            model: `МОДЕЛЬ ТЕСТОВЫЙ!!!`,
            manufacturer: `ПРОИЗВОДИТЕЛЬ ТЕСТОВЫЙ!!!`,
            costInCredits: `СТОИМОСТЬ ТЕСТОВЫЙ!!!`,
            length: `ДЛИНА ТЕСТОВЫЙ!!!`,
            crew: `КОМАНДА ТЕСТОВЫЙ!!!`,
            passengers: `ПАССАЖИРЫ ТЕСТОВЫЙ!!!`,
            cargoCapacity: `ТЕСТОВЫЙ!!!`,
        }
    }
}
