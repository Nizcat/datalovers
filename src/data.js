// importar desde ghibli json
// import jsonFilms from './data/ghibli/ghibli.json' assert { type: 'json' };

export default class Films {
  constructor(poster, title, description) {
      this.poster = poster,
      this.title = title,
      this.description = description
  }

  getPoster() {
      return this.poster
  }

  getTitle() {
      return this.title
  }

  getDescription() {
      return this.description
  }

  setPoster(newPoster) {
      this.poster = newPoster
  }

  setTitle (newTitle) {
      this.title = newTitle
  }

  setDescription(newDescription) {
      this.descripton = newDescription
  }
}
