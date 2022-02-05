// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import Films from './data.js';

const filmsDom = document.getElementById("container_cards")

const studioArray = studio;
let filmsArray = studioArray.films;


function showFilms(film) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="card_img">
        <img src="${film.getPoster()}" alt="${film.getTitle()}" />
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.getTitle()}</h3>
    </div>
    `
    filmsDom.appendChild(hijo)
}


for (const films of filmsArray){
    const film = new Films(films.poster, films.title)
    showFilms(film)
}


