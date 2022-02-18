import { showFilms } from './main.js'
import Films from './data.js'
import { filmsObj } from './main.js'


function loopShowFilms(objFilms){
    for (const film of objFilms){
        const filmValues = new Films({id: film.id, poster: film.poster, title: film.title, score: film.rt_score})
        showFilms(filmValues)
    }
}

// función que busca en el objeto las peliculas que coincidan con el string dada por el usuario
function searchWord(word){
    //const people = filmsObj["people"]
    const foundword = filmsObj.filter(function(film){
        let myReg = new RegExp(word, "i")
        let people_match = film.people.map(person => person.name.match(myReg) != null )
        if(film.title.match(myReg) != null || 
        film.description.match(myReg) != null || 
        film.director.match(myReg) != null ||
        film.producer.match(myReg) != null ||
        film.release_date.match(myReg) != null){
            return true
        } else if (people_match.includes(true)){
            return true
        } else {
            return false
        }
    })
    loopShowFilms(foundword)
}


// función que rrecorre un array con las peliculas ordenadas del más popular al menos. 
function showMorePopular(){
    const sortPopular = filmsObj.sort(function(f1, f2){
        return f1.rt_score - f2.rt_score
    })
    loopShowFilms(sortPopular)
}

// función que rrecorre un array con las peliculas ordenadas del la pelicula más reciente o la menos.
function showYearN(idElement){
    const sortYear = filmsObj.sort(function(f1, f2){
        if (f1.release_date < f2.release_date){
            return 1
        } else {
            return -1
        }
    })

    if (idElement === 'news'){
        loopShowFilms(sortYear)
    } else if (idElement === 'olds'){
        let sortYearO = sortYear.reverse()
        loopShowFilms(sortYearO)
    }
}

// función que rrecorre un array con las peliculas ordenadas alfabeticamente de la A-Z y la Z-A
function showSortAZ(idElement){
    const sortAZ = filmsObj.sort(function(f1, f2){
        if (f1.title > f2.title){
            return 1
        } else {
            return -1
        }
    })

    if (idElement === 'sortaz'){
        loopShowFilms(sortAZ)
    } else if (idElement === 'sortza'){
        let sortAZReverse = sortAZ.reverse()
        loopShowFilms(sortAZ)
    }
}

export {showMorePopular, showYearN, showSortAZ, searchWord, loopShowFilms}