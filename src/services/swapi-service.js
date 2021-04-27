export default class SwapiService {
    _apiBase = "https://swapi.dev/api"; //'База' нашей апишки

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

    _extractId = (item) => { //Достаем id из строки
        const isRegExp = /\/([0-9]*)\/$/;
        return item.url.match(isRegExp)[1];
    }

    _transformPlanet = (planet) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformPerson = (person) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            mass: person.mass,
            hairColor: person.hair_color,
            eyeColor: person.eye_color,
            gender: person.gender,
            birthYear: person.birthYear,
        }
    }

    _transformStarship = (starship) => { //Преобразуем ответ от сервера в удобный для нас
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }
}
