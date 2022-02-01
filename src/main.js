// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';

const studioArray = studio;
let filmsArray = studioArray.films;

for (const films of filmsArray){
    console.log(films["title"])
    console.log(films["description"]);
}
