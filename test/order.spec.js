import {
  searchWord,
  filterlist,
  filterByProductor,
  loopShowFilms,
  quizMood,
  sorting
} from '../src/order.js';
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

let miniFilms2 = [{
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

describe('quizMood', () => {

  it('is a function', () => {
    expect(typeof quizMood).toBe('function');
  });
})


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
    expect(searchWord("castle", miniFilms2)).toEqual(wordTest);
  });

  it('is a function', () => {
    expect(searchWord("Hayao", miniFilms2)).toEqual(wordTest);
  });

  it('is a function', () => {
    expect(searchWord("1986", miniFilms2)).toEqual(wordTest);
  });

  it('is a function', () => {
    expect(searchWord("Pazu", miniFilms2)).toEqual(wordTest);
  });

})

describe('sorting', () => {

  it('is a function', () => {
    expect(typeof sorting).toBe('function');
  });
  it('is a function', () => {
    expect(sorting("sortaz", [{
      "id": "11",
      "title": "From Up on Poppy Hill",
    }, {
      "id": "45",
      "title": "Castle in the Sky"
    }])).toEqual([{
      "id": "45",
      "title": "Castle in the Sky",
    }, {
      "id": "11",
      "title": "From Up on Poppy Hill"
    }]);
  });
  it('is a function', () => {
    expect(sorting("news", [{
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        release_date: "1986"
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        release_date: "1988"
      }
    ])).toEqual([{
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      release_date: "1988"
    }, {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      release_date: "1986"
    }]);
  });
  it('is a function', () => {
    expect(sorting("sortza", [{
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        release_date: "1986"
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        release_date: "1988"
      }
    ])).toEqual([{
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      release_date: "1988"
    }, {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      release_date: "1986"
    }]);
  });
  it('is a function', () => {
    expect(sorting("olds", [{
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        release_date: "1986"
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        release_date: "1988"
      }
    ])).toEqual([{
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      release_date: "1986"
    },
    {
      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      title: "My Neighbor Totoro",
      release_date: "1988"
    }]);
  });
  it('is a function', () => {
    expect(sorting("more_popular", [{
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        release_date: "1986"
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        release_date: "1988"
      }
    ])).toEqual([{
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        release_date: "1986"
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        release_date: "1988"
      }
    ]);
  });


})

describe('filterlist', () => {

  it('is a function', () => {
    expect(typeof filterlist).toBe('function');
  });
  it('is a function', () => {
    expect(filterlist(miniFilms)).toEqual();
  });

})
