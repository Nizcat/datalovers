export {
  searchWord,
  filterlist,
  filterByProductor,
  quizMood,
  sorting,
  director_list,
  producer_list
}


// función que busca en el objeto las peliculas que coincidan con el string dada por el usuario
function searchWord(word, theFilms) {
  const foundword = theFilms.filter(function (theFilms) {
    let myReg = new RegExp(word, "i")
    let people_match = theFilms.people.map(person => person.name.match(myReg) != null)
    if (theFilms.title.match(myReg) != null ||
      theFilms.description.match(myReg) != null ||
      theFilms.director.match(myReg) != null ||
      theFilms.producer.match(myReg) != null ||
      theFilms.release_date.match(myReg) != null) {
      return true
    } else if (people_match.includes(true)) {
      return true
    } else {
      return false
    }
  })
  
    return foundword
}
// función que rrecorre un array con las peliculas ordenadas del más popular al menos. 
function sorting(orderType, theFilms) {
   if (orderType === "more_popular") {
    let showMp = ""
    const sortPopular = theFilms.sort(function (f1, f2) {
      return f1.rt_score - f2.rt_score
    })
    showMp = sortPopular
    return showMp
  } else if (orderType === "news") {
    const sortYear = theFilms.sort(function (f1, f2) {
      if (f1.release_date < f2.release_date) {
        return 1
      } else {
        return -1
      }
    })
    return sortYear
  } else if (orderType === "olds") {
    const sortYearR = theFilms.sort(function (f1, f2) {
      if (f1.release_date < f2.release_date) {
        return 1
      } else {
        return -1
      }
    })
    return sortYearR.reverse()
  } else if (orderType === "sortaz") {
    const sortAZ = theFilms.sort(function (f1, f2) {
      if (f1.title > f2.title) {
        return 1
      } else {
        return -1
      }
    })
    return sortAZ
  } else if (orderType === "sortza") {
    const sortZA = theFilms.sort(function (f1, f2) {
      if (f1.title > f2.title) {
        return 1
      } else {
        return -1
      }
    })
    return sortZA.reverse()
  }
}


let producer_list = ""
let director_list = ""

function filterlist(theFilms) {
  let producers = theFilms.map((theFilms) => theFilms.producer);
  producer_list = Object.values(producers).reduce((list, prod) => {
    if (!list.includes(prod)) {
      list.push(prod);
    }
    return list; 
  }, [])
  let directors = theFilms.map((theFilms) => theFilms.director);

  director_list = Object.values(directors).reduce((list, dir) => {
    if (!list.includes(dir)) {
      list.push(dir);
    }
    return list; 
  }, [])

}


function filterByProductor(theFilms, dir_choice, prod_choice) {
  let filteredList = [];
  for (let filmkey of theFilms) {
    if ((dir_choice === filmkey.director && prod_choice === filmkey.producer) || (dir_choice === filmkey.director) || (prod_choice === filmkey.producer)) {
      filteredList.push(filmkey)
    }
  }
  return filteredList
}



function quizMood(theFilms, mood) { //recibe un objeto y separa por edades los personajes para
  let arrayJung = []; // regresar un personaje random dependiendo de la opción que 
  let arrayAdult = []; // escogió, el usuario, en el quiz.
  let arrayElder = [];
  for (let keyfilm of theFilms) {
    for (let characters of keyfilm.people) {
      if (characters.age < 29 || characters.age === "Child") {
         arrayJung.push(characters)
      } else if (characters.age > 29 && characters.age < 55 || characters.age === "Adult" || characters.age === "Unspecified/Adult" || characters.age === "NA") {
         arrayAdult.push(characters);
      } else if (characters.age > 56 || characters.age === "Elder") {
         arrayElder.push(characters);
      }
    }
  }
  function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
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
