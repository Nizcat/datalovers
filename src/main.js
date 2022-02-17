// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import Films from './data.js';
import { showMorePopular,  showYearN, showSortAZ, searchWord, loopShowFilms } from './order.js';
import People from './people.js';


const filmsDom = document.getElementById("container_cards")
const infoFilms = document.getElementById("container_info")
const peopleFilms = document.getElementById("container_people")
let filmsObj = studio.films;

// logica que busca peliculas relacionadas con una palabra
document.getElementById("search").addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        const word = document.getElementById("search").value
        searchWord(word)
    }
})


// Función que recibe una instancia de clase de las peliculas y las pinta
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
    const film = new Films({id: films.id, poster: films.poster, title: films.title, release_date: films.release_date, score: films.rt_score})
    showFilms(film)
}


// Funcion que busca la pelicula selecionada
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
        }
    }
    const filmInfo = new Films({id: filmselected.id, poster: filmselected.poster, title: filmselected.title,
            description: filmselected.description, director: filmselected.director,producer: filmselected.producer,
            release_date: filmselected.release_date,
        }
    )
    /* let nuevo = loopShowFilms(keysFilms)
    console.log(nuevo); */
    showInfoFilm(filmInfo)

    for (const personFilm of peopleFilm){
        const peorsonFilmS = new People({name: personFilm.name, img: personFilm.img, gender: personFilm.gender, age: personFilm.age, specie: personFilm.specie})
        showPeople(peorsonFilmS)
    }
}


// Función que recibe una instancia de clase de la información de las peliculas y la pinta.
function showInfoFilm(filmInfo){
    document.getElementById("container_cards").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
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
            <h5>${filmInfo.release_date}</h5>
        </div>
        <div class = "returnButton">
            <img class="retbut" id="back" src="/img/54623azul.png" alt="Regresa a Inicio" />
        </div>
    </div>
    `
    infoFilms.appendChild(hijo)
    document.getElementById('back').addEventListener('click', function(){location.reload()})
}


// Función que recibe una instancia de clase de la información de las personajes y la pinta.
function showPeople(people) {
    const hijo = document.createElement("div")
    hijo.classList.add("people")
    hijo.innerHTML = `
    <div class="people_img">
        <img src="${people.getImg()}" alt="${people.getName()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${people.getName()}</h3>
        <h4 class = "card_title">Gender: ${people.getGender()}</h3>
        <h4 class = "card_title">Age: ${people.getAge()}</h3>
        <h4 class = "card_title">${people.getSpecie()}</h3>
    </div>
    `
    peopleFilms.appendChild(hijo)
}


// ---------  Seccion de ordenamiento  -----------
// ordenar por popularidad
document.getElementById('more_popular').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showMorePopular()
})

// Ordenar por los más recientes
document.getElementById('news').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showYearN('news')
})
// Ordenar por los más antiguos 
document.getElementById('olds').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showYearN('olds')
})

// Ordenar alfabeticamente A-Z
document.getElementById('sortaz').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showSortAZ('sortaz')
})
// Ordenar alfabeticamente Z-A
document.getElementById('sortza').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showSortAZ('sortza')
})


// funcion que filtra la data y devuelve la de interes
function filter() {
    let producers = filmsObj.map((filmsObj) => filmsObj.producer);
    let producer_list = Object.
    values(producers).reduce((list, prod) => {
        if (!list.includes(prod)) {
        list.push(prod);
      }
      return list;
    }, [])
    let directors = filmsObj.map((filmsObj) => filmsObj.director);
    let director_list = Object.values(directors).reduce((list, dir) => {
      if (!list.includes(dir)) {
        list.push(dir);
      }
      return list;
    }, [])
    let years = filmsObj.map((filmsObj) => filmsObj.release_date);
    let year_list = Object.values(years).reduce((list, year) => {
      if (!list.includes(year)) {
        list.push(year);
      }
      return list;
    }, [])
    document.getElementById("filter").innerHTML = `
      <form >
      <label for="director" >Directores:
    </label><select id ="director" list="directores">
    <option value="">none</option>
    <option value="${director_list[0]}">${director_list[0]}</option>
    <option value="${director_list[1]}">${director_list[1]}</option>
    <option value="${director_list[2]}">${director_list[2]}</option>
    <option value="${director_list[3]}">${director_list[3]}</option>
    <option value="${director_list[4]}">${director_list[4]}</option>
    <option value="${director_list[5]}">${director_list[5]}</option>
  </select>
  <br>
  <label for="producer" >Productores:
  </label>
  <select id = "producer" list="producers">
    <option value="">none</option>
    <option value="${producer_list[0]}">${producer_list[0]}</option>
    <option value="${producer_list[1]}">${producer_list[1]}</option>
    <option value="${producer_list[2]}">${producer_list[2]}</option>
    <option value="${producer_list[3]}">${producer_list[3]}</option>
    <option value="${producer_list[4]}">${producer_list[4]}</option>
   </select>
   <br>
   <input type="submit" id="filtersubmit">
  </form>
  `
    document.getElementById("filtersubmit").addEventListener("click", function show(e) {
      e.preventDefault()
      let dir_choice = document.getElementById("director").value;
      let prod_choice = document.getElementById("producer").value;
      let filter_list = [];
      const keysFilms = Object.keys(filmsObj);
      console.log(keysFilms);
      for (let i = 0; i < keysFilms.length; i++) {
        let positionFilm = keysFilms[i];
        let filmkey = filmsObj[positionFilm];
        if ((dir_choice === filmkey.director && prod_choice === filmkey.producer && filter_list != filmkey.title) || (dir_choice === filmkey.director && filter_list != filmkey.title) || (prod_choice === filmkey.producer && filter_list != filmkey.title)) {
          let filmClass =new Films({
            id: filmkey.id,
            poster: filmkey.poster,
            title: filmkey.title,
            description: filmkey.description,
            director: filmkey.director,
            producer: filmkey.producer,
            release_date: filmkey.release_date,
          })
          filter_list.push(filmClass);
        }
      }
      document.getElementById("container_cards").innerHTML=""
      filter_list.map(showFilms)
    });
  } filter()


/* for(const film of filmsObj){
    let vehicles = film.vehicles
    console.log(vehicles);
} */

export {showFilms}
export { filmsObj }