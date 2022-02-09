// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import Films from './data.js';

const filmsDom = document.getElementById("container_cards")
const infoFilms = document.getElementById("container_info")
const studioObj = studio;
let filmsObj = studioObj.films;

function selectFilm(id) {
    let filmselected = {}
    let peopleFilm = {}
    const keysFilms = Object.keys(filmsObj);
    for (let i = 0; i < keysFilms.length; i++) {
        let positionFilm = keysFilms[i];
        let filmkey = filmsObj[positionFilm];
        if (filmkey.id === id) {
            filmselected = filmkey
            peopleFilm = filmkey.people
            console.log(peopleFilm);
        }
    }
    const filmInfo = new Films(
        {
            id: filmselected.id, 
            poster: filmselected.poster, 
            title: filmselected.title,
            description: filmselected.description,
            director: filmselected.director,
            producer: filmselected.producer,
            release_date: filmselected.release_date,
        }
    )
    showInfoFilm(filmInfo)
}

function showInfoFilm(filmInfo){
    document.getElementById("container_cards").innerHTML = ""
    const hijo = document.createElement("div")
    hijo.classList.add("info-card")
    hijo.innerHTML = ` 
    <div class= "info_container_card">
        <div class="info_card_img"> 
            <img src="${filmInfo.poster}" alt="${filmInfo.title}" />
        </div>
        <div class="info_card__data">
            <h3 class = "info_card_title">${filmInfo.title}</h3>
            <p>${filmInfo.description}</p>
            <h4>${filmInfo.producer}</h4>
            <div class="year">
                <h5>${filmInfo.release_date}</h5>
            </div>
        </div>
        <div class = "returnButton">
            <img class="retbut" id="back" src="/img/54623azul.png" alt="Regresa a Inicio" />
        </div>
    </div>
    `
    infoFilms.appendChild(hijo)
    document.getElementById('back').addEventListener('click', function(){location.reload()})
}


function showFilms(film) {
    let id = film.getId()
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="card_img" id="${film.getId()}">
        <img src="${film.getPoster()}" alt="${film.getTitle()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.getTitle()}</h3>
    </div>
    `
    filmsDom.appendChild(hijo)
    document.getElementById(id).addEventListener('click', function(){selectFilm(id)})
}


for (const films of filmsObj){
    const film = new Films({id: films.id, poster: films.poster, title: films.title})
    showFilms(film)
}


