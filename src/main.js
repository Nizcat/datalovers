// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import Films from './data.js';
import {sorting, searchWord, loopShowFilms, filterlist, filterByProductor, quizMood, producer_list, director_list } from './order.js';
import People from './people.js';
import Location from './locations.js';


const filmsDom = document.getElementById("container_cards")
const infoFilms = document.getElementById("container_info")
const peopleFilms = document.getElementById("container_people")
const locationFilms = document.getElementById("container_locations")
let filmsObj = studio.films;


//Img del logo recarga la página
document.getElementById('logonav').addEventListener('click', function () { location.reload() })

// Logica que muestra la info Ghibli
const sectionGhibli = document.querySelector(".ghibli_section")
const sectionSlide = document.querySelector(".slide_section")
document.getElementById("ghibli").addEventListener('click', function () {
    document.getElementById("info_film").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
    filmsDom.innerHTML = ""
    sectionGhibli.style.display = 'flex'
    sectionSlide.style.display = 'none'
    sectionQuiz.style.display = 'none'
})

// Logica que muestra el Quiz Ghibli
const titleMain = document.querySelector(".title_main")
const sectionQuiz = document.querySelector(".quiz_section")
document.getElementById("quiz").addEventListener('click', function () {
    document.getElementById("info_film").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
    titleMain.style.display = 'none'
    filmsDom.innerHTML = ""
    sectionSlide.style.display = 'flex'
    sectionQuiz.style.display = 'flex'
    sectionGhibli.style.display = 'none'
})

// logica que busca peliculas relacionadas con una palabra
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        const word = document.getElementById("search").value
        document.getElementById("info_film").innerHTML = ""
        document.getElementById("organize").innerHTML = ""
        filmsDom.innerHTML = ""
        sectionQuiz.style.display = 'none'
        sectionGhibli.style.display = 'none'
        searchWord(word, filmsObj).map(showFilms)
    }
})

//Muestra las películas de Ghibli 
loopShowFilms(filmsObj).map(showFilms)

      


//Renderiza las películas de Ghibli según la función que la llame
function showFilms(film) {
    let id = film.getId()
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.id = film.getId()
    hijo.innerHTML = `
    <div class="card_img" id="${film.getId()}">
        <img src="${film.getPoster()}" alt="${film.getTitle()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.getTitle()}</h3>
    </div>
    `
    filmsDom.appendChild(hijo)
    document.getElementById(id).addEventListener('click', function () {
        const titlesInfoFilm = document.querySelector(".titles_info_film")
        titlesInfoFilm.style.display = 'flex'
        selectFilm(id)
    })
}

//Renderiza de las películas para:
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

// Funcion que busca la pelicula selecionada y renderiza la info ampliada, personajes
function selectFilm(id) {
    let filmselected = {}
    let peopleFilm = {}
    let locationsFilm = {}
    const keysFilms = Object.keys(filmsObj);
    for (let i = 0; i < keysFilms.length; i++) {
        let positionFilm = keysFilms[i];
        let filmkey = filmsObj[positionFilm];
        if (filmkey.id === id) {
            filmselected = filmkey
            peopleFilm = filmkey.people
            locationsFilm = filmkey.locations
        }
    }
    infoFilm(filmselected)
    infoPeople(peopleFilm)

    document.getElementById('title_locations').addEventListener('click', function () {
        const containerPeople = document.querySelector('.container_people')
        containerPeople.style.display = 'none'
        showInfoLocations(locationsFilm)
    })

    document.getElementById("title_people").addEventListener('click', function () {
        const containerLocations = document.querySelector('.container_locations')
        containerLocations.style.display = 'none'
        const containerPeople = document.querySelector('.container_people')
        containerPeople.style.display = ''
    })
}


// Funcion que crea una instancia de la información de cada pelicula
function infoFilm(filmselected) {
    const filmInfo = new Films({
        id: filmselected.id, poster: filmselected.poster, title: filmselected.title,
        description: filmselected.description, director: filmselected.director, producer: filmselected.producer,
        release_date: filmselected.release_date,
    }
    )
    showInfoFilm(filmInfo)
}

// Funcion que crea una instancia de la información de cada personaje
function infoPeople(peopleFilm) {
    for (const personFilm of peopleFilm) {
        const peorsonFilmS = new People({ name: personFilm.name, img: personFilm.img, gender: personFilm.gender, age: personFilm.age, specie: personFilm.specie })
        showPeople(peorsonFilmS)
    }
}


// Función que recibe una instancia de clase de la información de las peliculas y la pinta.
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
    document.getElementById('back').addEventListener('click', function () { location.reload() })
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

// Función que recibe una instancia de clase de la información de las locaciones
function showInfoLocations(locationsFilm) {
    for (const locationFilm of locationsFilm) {
        const locationValues = new Location({ name: locationFilm.name, img: locationFilm.img, climate: locationFilm.climate, terrain: locationFilm.terrain, surface_water: locationFilm.surface_water })
        showLocations(locationValues)
    }
}

// Funcion que pinta las locaciones en el Dom
function showLocations(locationValues) {
    const hijo = document.createElement("div")
    hijo.classList.add("locations")
    hijo.innerHTML = `
    <div class="locations_img">
        <img src="${locationValues.getImg()}" alt="${locationValues.getName()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${locationValues.getName()}</h3>
        <h3 class = "card_title">Climate: ${locationValues.getClimate()}</h3>
        <h3 class = "card_title">Terrain: ${locationValues.getTerrain()}</h3>
        <h3 class = "card_title">Surface Water: ${locationValues.getSurfaceWater()}</h3>
    </div>
    `
    locationFilms.appendChild(hijo)
}


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
    sorting(event.target.value, filmsObj).map(showFilmsArray)
})



// funcion que filtra la data y devuelve la de interes
filterlist(filmsObj)
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
   filterByProductor(filmsObj, event.target.value).map(showFilms)
   

    
    
});
document.getElementById("producer").addEventListener("change", function (event) {
    document.getElementById("container_cards").innerHTML = ""
    filterByProductor(filmsObj, event.target.value).map(showFilms)
  
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
       showQuiz(quizMood(filmsObj, event.target.value));
    });
});

// Pintar el Personaje Random del Quiz
function showQuiz(allAges) {
    document.getElementById("quiz_container").innerHTML =
      `
      <div class="quiz_personaje">
    <h2> El personaje para tu mood de hoy es: </h2>
   </div>
    <div class="people_img">
    <img src="${(allAges[2][1])}" alt="${(allAges[1][1])}"/>
   </div>
   <div class="card__data">
    <h3 class = "card_title">${allAges[1][1]}</h3>
    <h3 class = "card_title">Gender: ${allAges[3][1]}</h3>
    <h3 class = "card_title">Age: ${allAges[4][1]}</h3>
    <h3 class = "card_title">${allAges[1][1]}</h3>
  </div>
    `
}



