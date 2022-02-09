// importar desde ghibli json
// import jsonFilms from './data/ghibli/ghibli.json' assert { type: 'json' };

export default class Films {
    constructor(film_data) {
        this.id = film_data['id']
        this.title = film_data['title']
        this.description = film_data['description']
        this.director = film_data['director']
        this.producer = film_data['producer']
        this.poster = film_data['poster']
        this.release_date = film_data['date']
        this.rt_score = film_data['score']
    }


    getId() {
        return this.id
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getDirector() {
        return this.director
    }

    getProducer() {
        return this.producer
    }

    getPoster() {
        return this.poster
    }

    getDate() {
        return this.release_date
    }

    getScore() {
        return this.rt_score
    }

    setId(newId) {
        this.id = newId
    }

    setTitle(newTitle) {
        this.title = newTitle
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    setDirector(newDirector) {
        this.director = newDirector
    }

    setProducer(newProducer) {
        this.producer = newProducer
    }
    

    setPoster(newPoster) {
        this.poster = newPoster
    }

    setDate(newDate) {
        this.release_date = newDate
    }

    setScore(newScore) {
        this.rt_score = newScore
    }

}

