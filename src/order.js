import Films from './data.js'
import People from './people.js'



function loopShowFilms(anObject) {
  let arrayFilms = []
  for (const film of anObject) {
    const filmValues = new Films({
      id: film.id,
      poster: film.poster,
      title: film.title,
      score: film.rt_score
    })
    arrayFilms.push(filmValues)
  }

  return arrayFilms
}

// función que busca en el objeto las peliculas que coincidan con el string dada por el usuario
function searchWord(word, anObject) {
  let searchW = ""
  const foundword = anObject.filter(function (anObject) {
    let myReg = new RegExp(word, "i")
    let people_match = anObject.people.map(person => person.name.match(myReg) != null)
    if (anObject.title.match(myReg) != null ||
      anObject.description.match(myReg) != null ||
      anObject.director.match(myReg) != null ||
      anObject.producer.match(myReg) != null ||
      anObject.release_date.match(myReg) != null) {
      return true
    } else if (people_match.includes(true)) {
      return true
    } else {
      return false
    }
  })
  searchW = loopShowFilms(foundword, anObject)
  return searchW

}


// función que rrecorre un array con las peliculas ordenadas del más popular al menos. 
function showMorePopular(anObject) {
  let showMp = ""
  const sortPopular = anObject.sort(function (f1, f2) {
    return f1.rt_score - f2.rt_score

  })
  showMp = sortPopular
  return showMp

}

// función que rrecorre un array con las peliculas ordenadas del la pelicula más reciente o la menos.
function showYearN(anObject) {
  const sortYear = anObject.sort(function (f1, f2) {
    if (f1.release_date < f2.release_date) {
      return 1
    } else {
      return -1
    }
  })
  return sortYear

}

// función que rrecorre un array con las peliculas ordenadas alfabeticamente de la A-Z y la Z-A
function showSortAZ(anObject) {
  const sortAZ = anObject.sort(function (f1, f2) {
    if (f1.title > f2.title) {
      return 1
    } else {
      return -1
    }
  })
  return sortAZ

}

let producer_list = ""
let director_list = ""

function filterlist(anObject) {
  let producers = anObject.map((anObject) => anObject.producer);
  producer_list = Object.values(producers).reduce((list, prod) => {
    if (!list.includes(prod)) {
      list.push(prod);
    }
    return list;
  }, [])
  let directors = anObject.map((anObject) => anObject.director);

  director_list = Object.values(directors).reduce((list, dir) => {
    if (!list.includes(dir)) {
      list.push(dir);
    }
    return list;
  }, [])

}


function filterByProductor(anObject, dir_choice, prod_choice) {
  let filteredList = [];
  for (let filmkey of anObject) {
    if ((dir_choice === filmkey.director && prod_choice === filmkey.producer) || (dir_choice === filmkey.director) || (prod_choice === filmkey.producer)) {
      let filmClass = new Films({
        id: filmkey.id,
        poster: filmkey.poster,
        title: filmkey.title,
        description: filmkey.description,
        director: filmkey.director,
        producer: filmkey.producer,
        release_date: filmkey.release_date,
      })
      filteredList.push(filmClass)
    }
  }
  return filteredList

}

function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

function quizMood(anObject, mood) {
  let arrayJung = [];
  let arrayAdult = [];
  let arrayElder = [];
  for (let keyfilm of anObject) {
    for (let characters of keyfilm.people) {
      if (characters.age < 29 || characters.age === "Child") {
        let jungCharacters = new People({
          id: characters.id,
          name: characters.name,
          img: characters.img,
          gender: characters.gender,
          age: characters.age,
          specie: characters.specie
        })
        let jungs = Object.entries(jungCharacters);
        arrayJung.push(jungs)
      } else if (characters.age > 29 && characters.age < 55 || characters.age === "Adult" || characters.age === "Unspecified/Adult" || characters.age === "NA") {
        let adultCharacters = new People({
          id: characters.id,
          name: characters.name,
          img: characters.img,
          gender: characters.gender,
          age: characters.age,
          specie: characters.specie
        })
        let adult = Object.entries(adultCharacters);
        arrayAdult.push(adult);
      } else if (characters.age > 56 || characters.age === "Elder") {
        let elderCharacters = new People({
          id: characters.id,
          name: characters.name,
          img: characters.img,
          gender: characters.gender,
          age: characters.age,
          specie: characters.specie
        })
        let elder = Object.entries(elderCharacters);
        arrayElder.push(elder);
      }
    }
  }
  let elderChar = arrayElder[getRandomInt(0, 15)];
  let adultChar = arrayAdult[getRandomInt(0, 30)];
  let jungChar = arrayJung[getRandomInt(0, 30)];
  
  if (mood === "jung") {
    return jungChar
  } else if (mood === "adult") {
    return adultChar
  } else if (mood === "elder") {
    return elderChar
  }
}


export {
  showMorePopular,
  showYearN,
  showSortAZ,
  searchWord,
  loopShowFilms,
  filterlist,
  filterByProductor,
  quizMood,
  director_list,
  producer_list
}
