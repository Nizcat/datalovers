import {
  showYearN,
  showSortAZ,
  searchWord,
  filterlist,
  filterByProductor,
  loopShowFilms,
  quizMood
} from '../src/order.js';

// , , , , ,  , , moodSelection
const miniFilms = [{
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    title: 'Castle in the Sky',
    description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    release_date: "1986",
    rt_score: "95",
    people: [{
        id: "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        name: "Pazu",
        img: "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        gender: "Male",
        age: "13",
        eye_color: "Black",
        hair_color: "Brown",
        specie: "Human"
      },
      {
        id: "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        name: "Lusheeta Toel Ul Laputa",
        img: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        gender: "Female",
        age: "13",
        eye_color: "Black",
        hair_color: "Black",
        specie: "Human"
      }
    ]
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    release_date: "1988",
    rt_score: "93"
  }
]

let loopFilter = [{
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    title: "Castle in the Sky",
    director: undefined,
    producer: undefined,
    description: undefined,
    release_date: undefined,
    rt_score: "95"
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    title: "My Neighbor Totoro",
    director: undefined,
    producer: undefined,
    description: undefined,
    rt_score: "93",
    release_date: undefined
  }

]

describe('loopShowFilms', () => {

  it('should be a function', () => {
    expect(typeof loopShowFilms).toBe('function');
  });

  it("should return arrays from de films", () => {
    expect(loopShowFilms(miniFilms)).toEqual(loopFilter);
  });
})

let dir_choice = "Hayao Miyazaki";
let prod_choice = "Hayao Miyazaki";
let filterTest = [{
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    title: "Castle in the Sky",
    description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: undefined
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    poster: "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    title: "My Neighbor Totoro",
    description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    rt_score: undefined,
    release_date: "1988"
  }

]


describe('filterByProductor', () => {

  it('is a function', () => {
    expect(typeof filterByProductor).toBe('function');
  });

  it('should return an array ', () => {
    expect(filterByProductor(miniFilms, dir_choice, prod_choice)).toEqual(filterTest);
  });

})

/* let miniCharacters = [{
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [{
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
     
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      }
    ]
  }

]

let mood ="jung"
let moodTestResult = [
  {id: "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01"},
  {name: "Pazu"},
  {img: "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"},
  {gender: "Male"},
  {age: "13"},
  {eye_color: undefined},
  {hair_color: undefined},
  {specie: "Human"}  
     ] */

describe('quizMood', () => {

  it('is a function', () => {
    expect(typeof quizMood).toBe('function');
  });
  /* 
    it('should return a character in an  form', () => {
      expect(quizMood(miniCharacters, mood)).toEqual(moodTestResult);
    });
   */

})

let miniFilms2 = {
    "films": [{
          "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          "title": "Castle in the Sky",
          "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
          "director": "Hayao Miyazaki",
          "producer": "Isao Takahata",
          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
          "release_date": "1986",
          "rt_score": "95",
          "people": [{
              "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
              "name": "Pazu",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
              "gender": "Male",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Brown",
              "specie": "Human"
            },
            {
              "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
              "name": "Lusheeta Toel Ul Laputa",
              "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
              "gender": "Female",
              "age": "13",
              "eye_color": "Black",
              "hair_color": "Black",
              "specie": "Human"
            }
          ]
        }]
      }




        let word = "Pazu"
        let wordTest = [{
          id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
          poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
          title: "Castle in the Sky",
          director: undefined,
          producer: undefined,
          description: undefined,
          release_date: undefined,
          rt_score: "95"
        }]

        describe('searchWord', () => {

          it('is a function', () => {
            expect(typeof searchWord).toBe('function');
          });

          it('is a function', () => {
            expect(searchWord(word, miniFilms2)).toEqual(wordTest);
          });

        })

        describe('showSortAZ', () => {

          it('is a function', () => {
            expect(typeof showSortAZ).toBe('function');
          });
          /*  it('is a function', () => {
             expect(showSortAZ(miniFilms)).toEqual();
           }); */

        })
        describe('showYearN', () => {

          it('is a function', () => {
            expect(typeof showYearN).toBe('function');
          });

        })

        describe('filterlist', () => {

          it('is a function', () => {
            expect(typeof filterlist).toBe('function');
          });

        })
