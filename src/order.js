import { showFilms } from './main.js'
import Films from './data.js'
import { filmsObj } from './main.js'


function loopShowFilms(objFilms){
    for (const film of objFilms){
        const filmValues = new Films({id: film.id, poster: film.poster, title: film.title, score: film.rt_score})
        //showFilms(filmValues)
    }
}

// función que busca en el objeto las peliculas que coincidan con el string dada por el usuario
function searchWord(word){
    //const people = filmsObj["people"]
    const foundword = filmsObj.filter(function(film){
        let myReg = new RegExp(word, "i")
        let people_match = film.people.map(person => person.name.match(myReg) != null )
        let location_match = film.locations.map(location => location.name.match(myReg) != null )
        if(film.title.match(myReg) != null || 
        film.description.match(myReg) != null || 
        film.director.match(myReg) != null ||
        film.producer.match(myReg) != null ||
        film.release_date.match(myReg) != null){
            return true
        } else if (people_match.includes(true)){
            return true
        } else if (location_match.includes(true)){
            return true
        } else {
            return false
        }
    })
    document.getElementById("container_cards").innerHTML = ""
    document.getElementById("organize").innerHTML = ""
    /* for (const filmfound of foundword){
        const newfilmsFound = new Films({id: filmfound.id, poster: filmfound.poster, title: filmfound.title, score: filmfound.rt_score})
        showFilms(newfilmsFound)
    } */
    loopShowFilms(foundword)
}


// función que rrecorre un array con las peliculas ordenadas del más popular al menos. 
function showMorePopular(){
    const sortPopular = filmsObj.sort(function(f1, f2){
        return f1.rt_score - f2.rt_score
    })

    for (const filmPop of sortPopular){
        const newsortAZ = new Films({id: filmPop.id, poster: filmPop.poster, title: filmPop.title, score: filmPop.rt_score})
        showFilms(newsortAZ)
    }
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
        for (const filmSY of sortYear){
            const newsortYear = new Films({id: filmSY.id, poster: filmSY.poster, title: filmSY.title, score: filmSY.rt_score})
            showFilms(newsortYear)
        }
    } else if (idElement === 'olds'){
        let sortYearO = sortYear.reverse()
        for (const filmSYO of sortYearO){
            const newsortYearO = new Films({id: filmSYO.id, poster: filmSYO.poster, title: filmSYO.title, score: filmSYO.rt_score})
            showFilms(newsortYearO)
        }
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
        for (const filmSAZ of sortAZ){
            const newsortAZ = new Films({id: filmSAZ.id, poster: filmSAZ.poster, title: filmSAZ.title, score: filmSAZ.rt_score})
            showFilms(newsortAZ)
        }
    } else if (idElement === 'sortza'){
        let sortAZReverse = sortAZ.reverse()
        for (const filmSZA of sortAZReverse){
            const newsortZA = new Films({id: filmSZA.id, poster: filmSZA.poster, title: filmSZA.title, score: filmSZA.rt_score})
            showFilms(newsortZA)
        } 
    }
}



export {showMorePopular, showYearN, showSortAZ, searchWord, loopShowFilms}