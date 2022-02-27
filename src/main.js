// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import {
  sorting,
  searchWord,
  filterlist,
  filterByProductor,
  quizMood,
  producer_list,
  director_list
} from './order.js';

const filmsDom = document.getElementById("container_cards")
const infoFilms = document.getElementById("container_info")
const peopleFilms = document.getElementById("container_people")
const locationFilms = document.getElementById("container_locations")
let theFilms = studio.films;

//Muestra las películas de Ghibli
theFilms.map(showFilmsArray)

//Img del logo recarga la página
document.getElementById('logonav').addEventListener('click', function () {
  location.reload()
})

// Logica que muestra el Quiz Ghibli
const titleMain = document.querySelector(".title_main")
const sectionQuiz = document.querySelector(".quiz_section")
document.getElementById("quiz").addEventListener('click', function () {
  document.getElementById("info_film").innerHTML = ""
  document.getElementById("organize").innerHTML = ""
  titleMain.style.display = 'none'
  filmsDom.innerHTML = ""
  sectionQuiz.style.display = 'flex'
})

// logica que busca peliculas relacionadas con una palabra
document.getElementById("search").addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    const word = document.getElementById("search").value
    document.getElementById("info_film").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
    filmsDom.innerHTML = ""
    sectionQuiz.style.display = 'none'
    searchWord(word, theFilms).map(showFilmsArray)
  }
})

//Renderiza de las películas para:

let filmselected = {}
let peopleFilm = {}
let locationFilm = {}
function selectFilm(id) {
 
  for (let film of theFilms) {
    if (film.id === id) {
     filmselected = film
     peopleFilm = film.people
     locationFilm = film.locations
    }
  }
  peopleFilm.map(showPeople)
  showInfoFilm(filmselected)
  locationFilm.map(showLocations)
}




document.getElementById('title_locations').addEventListener('click', function () {
  const containerPeople = document.querySelector('.container_people')
  containerPeople.innerHTML = ""
  locationFilm.map(showLocations)
})

document.getElementById("title_people").addEventListener('click', function () {
  const containerLocations = document.querySelector('.container_locations')
  containerLocations.innerHTML = ""
  peopleFilm.map(showPeople)
})
 
document.getElementById("sorting").innerHTML = `
      <form >
      <label for="sort" >Ordena por:
    </label><select id ="sort" list="ordering">
    <option value="more_popular">Popular</option>
    <option value="news">Newer</option>
    <option value="olds">Older</option>
    <option value="sortaz">Title A-Z</option>
    <option value="sortza">Title Z-A</option>
    </select>
    `
// ---------  Seccion de ordenamiento  -----------
// ordenar por popularidad
document.getElementById('sort').addEventListener('change', function (event) {
  document.getElementById("container_cards").innerHTML = ""
  sorting(event.target.value, theFilms).map(showFilmsArray)
})

// funcion que filtra la data y devuelve la de interes

filterlist(theFilms)

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
     </form>
  `
document.getElementById("director").addEventListener("change", function (event) {
  document.getElementById("container_cards").innerHTML = ""
  filterByProductor(theFilms, event.target.value).map(showFilmsArray)




});
document.getElementById("producer").addEventListener("change", function (event) {
<<<<<<< HEAD
    document.getElementById("container_cards").innerHTML = ""
    filterByProductor(filmsObj, event.target.value).map(showFilms)
=======
  document.getElementById("container_cards").innerHTML = ""
  filterByProductor(theFilms, event.target.value).map(showFilmsArray) 

>>>>>>> testing2
});



// Seleccionar pregunta
document.getElementById("quiz").addEventListener("click", function quiz() {
  document.getElementById("container_cards").innerHTML = ""
  document.getElementById("quiz_container").innerHTML = `
    <form >
    <label for="director" >¿Cuál es tu nivel de energía ahora?
  </label><select id ="quizMood" list="energyLevel">
  <option value=""></option>
  <option value="elder">Low Battery</option>
  <option value="adult">Half battery</option>
  <option value="jung">Full !!</option>
  </select>
    `
  document.getElementById("quizMood").addEventListener("change", function (event) {
    showQuiz(quizMood(theFilms, event.target.value));
  });
});

function showInfoFilm(filmInfo) {
  titleMain.style.display = 'none'
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
  document.getElementById('back').addEventListener('click', function () {
    location.reload()
  })

}

function showFilmsArray(film) {
  let id = film.id
  const hijo = document.createElement("div")
  hijo.classList.add("card")
  hijo.id = film.id
  hijo.innerHTML = `
    <div class="card_img" id="${film.id}">
        <img src="${film.poster}" alt="${film.title}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.title}</h3>
    </div>
    `
  filmsDom.appendChild(hijo)
  document.getElementById(id).addEventListener('click', function () {
    const titlesInfoFilm = document.querySelector(".titles_info_film")
    titlesInfoFilm.style.display = 'flex'
    selectFilm(id)
  })

}

function showQuiz(allAges) {
  document.getElementById("quiz_container").innerHTML =
    `
      <div class="quiz_personaje">
    <h2> El personaje para tu mood de hoy es: </h2>
   </div>
    <div class="people_img">
    <img src="${(allAges.img)}" alt="${(allAges.name)}"/>
   </div>
   <div class="card__data">
    <h3 class = "card_title">${allAges.name}</h3>
    <h3 class = "card_title">Gender: ${allAges.gender}</h3>
    <h3 class = "card_title">Age: ${allAges.age}</h3>
    <h3 class = "card_title">${allAges.specie}</h3>
  </div>
    `
}

function showPeople(people) {
  const hijo = document.createElement("div")
  hijo.classList.add("people")
  hijo.innerHTML = `
    <div class="people_img">
        <img src="${people.img}" alt="${people.name}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${people.name}</h3>
        <h4 class = "card_title">Gender: ${people.gender}</h3>
        <h4 class = "card_title">Age: ${people.age}</h3>
        <h4 class = "card_title">${people.specie}</h3>
    </div>
    `
  peopleFilms.appendChild(hijo)
}

function showLocations(locationValues) {
  const hijo = document.createElement("div")
  hijo.classList.add("locations")
  hijo.innerHTML = `
    <div class="locations_img">
        <img src="${locationValues.img}" alt="${locationValues.name}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${locationValues.name}</h3>
        <h3 class = "card_title">Climate: ${locationValues.climate}</h3>
        <h3 class = "card_title">Terrain: ${locationValues.terrain}</h3>
        <h3 class = "card_title">Surface Water: ${locationValues.surface_water}</h3>
    </div>
    `
  locationFilms.appendChild(hijo)
}
