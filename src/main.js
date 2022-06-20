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

let theFilms = studio.films;

//Muestra las películas de Ghibli
theFilms.map(showFilms)
let filmselected = {}
let peopleFilm = {}
let locationFilm = {}

function showFilms(film) {
  let id = film.id
  let newCard = document.createElement("div")
  newCard.id = film.id
  newCard.classList.add("card")
  /* newCard.id = film.id */
  newCard.innerHTML = ` 
    <div class="card_img" id="${film.id}">
        <img src="${film.poster}" alt="${film.title}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.title}</h3>
    </div> 
    `
  document.getElementById("container_cards").appendChild(newCard)

  document.getElementById(id).addEventListener('click', function () {

    for (film of theFilms) {
      if (id === film.id) {
        filmselected = film
        peopleFilm = film.people
        locationFilm = film.locations
      }
    }
    showInfoFilm(filmselected)
    peopleFilm.map(showPeople)
    locationFilm.map(showLocations)
  })
}


//Img del logo recarga la página
document.getElementById('logonav').addEventListener('click', function () {
  location.reload()
})

// Buscador
document.getElementById("search").addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    const word = document.getElementById("search").value
    document.getElementById("info_film").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
    document.getElementById("container_cards").innerHTML = ""
    searchWord(word, theFilms).map(showFilms)
  }
})


// ---------  Seccion de ordenamiento  -----------

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

document.getElementById("sort").addEventListener('change', function (event) {
  document.getElementById("container_cards").innerHTML = ""
  sorting(event.target.value, theFilms).map(showFilms)
})

// Filtro
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
  filterByProductor(theFilms, event.target.value).map(showFilms)
});
document.getElementById("producer").addEventListener("change", function (event) {
  document.getElementById("container_cards").innerHTML = ""
  filterByProductor(theFilms, event.target.value).map(showFilms)
});

// Seleccionar pregunta

document.getElementById("quiz").addEventListener("click", function quiz() {
  document.getElementById("container_cards").innerHTML = ""
  document.getElementById("info_film").innerHTML = ""
  document.getElementById("organize").innerHTML = ""
  const quizQuestion = document.createElement("section")
  quizQuestion.classList.add(".quiz_container")
  quizQuestion.innerHTML = `
   <div class="quiz_container" id="quiz_container" >
    <h1 class="title_quiz">Quiz</h1>
    <br>
    <form >
    <label for="director" >¿Cuál es tu nivel de energía ahora?
  </label><select class=moodSelect id ="quizMood" list="energyLevel">
  <option value=""></option>
  <option value="elder">Low Battery</option>
  <option value="adult">Half battery</option>
  <option value="jung">Full !!</option>
  </select> 
  </div>
    `
  document.getElementById("container").appendChild(quizQuestion)

  document.getElementById("quizMood").addEventListener("change", function (event) {
    showQuiz(quizMood(theFilms, event.target.value));

  });
});

function showQuiz(allAges) {
  document.getElementById("container").innerHTML =
 `<div class="quizContainer">
    <div class="quiz_character">
      <h2> The character for your today´s mood is:</h2>
   
      <div class="people_img">
       <img src="${(allAges[0].img)}" alt="${(allAges[0].name)}"/>
      </div>
      <div class="card__data">
        <p class = "card_title">${allAges[0].name}</p>
        <p class = "card_title">Gender: ${allAges[0].gender}</p>
        <p class = "card_title">Age: ${allAges[0].age}</p>
        <p class = "card_title">${allAges[0].specie}</p>
      </div>
    </div>
    <div class="quiz_character">
    <h2> And your vehicle is : </h2>
 
    <div class="people_img">
     <img src="${(allAges[1].img)}" alt="${(allAges[1].name)}"/>
    </div>
    <div class="card__data">
      <p class = "card_title">${allAges[1].name}</p>
      <p class = "card_title">Description: ${allAges[1].description}</p>
    </div>
  </div>
  </div>
  <div class = "returnButton">
   <img class="returnButton" id="back" src="../src/img/54623azul.png" alt="Regresa a Inicio" />
  </div>
    `

  document.getElementById('back').addEventListener('click', function () {
    location.reload()
  })
}

//Amplia la información de la película seleccionada
function showInfoFilm(filmInfo) {

  document.getElementById("container_cards").innerHTML = ""
  document.getElementById("organize").innerHTML = ""
  document.getElementById("container").style.display = "none"
  const hijo = document.createElement("div")
  hijo.classList.add("info-card")
  hijo.innerHTML = ` 
    <div >
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
          <img class="returnButton" id="back" src="../src/img/54623azul.png" alt="Regresa a Inicio" />
      
        </div>
        <br>
         <div class="titles_info_film">
          <button  class="infoButton" id="title_people">People</button>
          <button class="infoButton" id="title_locations">Locations</button>
    </div>
    `
  let id = filmInfo.id
  document.getElementById("container_info").appendChild(hijo)
  document.getElementById('back').addEventListener('click', function () {
    location.reload()
  })

  document.getElementById('title_locations').addEventListener('click', function () {
    const containerPeople = document.querySelector('.container_people')
    containerPeople.innerHTML = ""
    let oneFilm = ""
    let locationFilm = {}
    for (let film of theFilms) {
      if (id === film.id) {
        oneFilm = film
        locationFilm = oneFilm.locations
      }
    }
    locationFilm.map(showLocations)
  })

  document.getElementById("title_people").addEventListener('click', function () {
    const containerLocations = document.querySelector('.container_locations')
    containerLocations.innerHTML = ""
    let oneFilm = ""
    let peopleFilm = {}
    for (let film of theFilms) {
      if (id === film.id) {
        oneFilm = film
        peopleFilm = oneFilm.people
      }
    }
    peopleFilm.map(showPeople)
  })
}

//Función que crea las cards de las películas

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
  document.getElementById("container_people").appendChild(hijo)
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
  document.getElementById("container_locations").appendChild(hijo)
}
