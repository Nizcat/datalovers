import {
  searchWord,
  filterlist,
  filterByProductor,
  quizMood,
  sorting
} from '../src/order.js';

const miniFilms = [{
  "title": 'Castle in the Sky',
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata"
}]


let miniFilms2 = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "people": [{
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
    },
    {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
    }
  ]
}]



let dir_choice = "Hayao Miyazaki";
let prod_choice = "Hayao Miyazaki";


describe('filterByProductor', () => {
  it('is a function', () => {
    expect(typeof filterByProductor).toBe('function');
  });

  it('should return the matched results of a film ', () => {
    expect(filterByProductor(miniFilms, dir_choice, prod_choice)).toEqual([{
      title: "Castle in the Sky",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata"
    }]);
  });
});

let characters = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",

  "people": [{
      "name": "Pazu",
      "age": "13",
    },
    {
      "name": "Dola",
      "age": "60"

    }, {
      "name": "Romska Palo Ul Laputa",
      "age": "33"

    }
  ]
}]


describe('quizMood', () => {

  it('is a function', () => {
    expect(typeof quizMood).toBe('function');
  });

  it('should retur a jung character', () => {
    expect(quizMood(characters, "jung")).toEqual();
  });
})




describe('searchWord', () => {
  it('is a function', () => {
    expect(typeof searchWord).toBe('function');
  });

  it('should returns the information that contain the search word', () => {
    expect(searchWord("Pazu", miniFilms2)).toEqual([{
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      title: "Castle in the Sky",
      description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      people: [{
        id: "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        name: "Pazu"
      }, {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
      }]


    }]);
  });
})

describe('sorting', () => {

  it('is a function', () => {
    expect(typeof sorting).toBe('function');
  });
  it('is should return an array in alphabetical order', () => {
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
  it('should return in order of year the films', () => {
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
  it('should return the films in alphabetical order z to a', () => {
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
  it('should return the older films first', () => {
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
      }
    ]);
  });
  it('should return the most popular films first', () => {
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

const miniFilms3 = [{
  "title": 'Castle in the Sky',
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata"
}, {
  "title": "My Neighbor Totoro",
  "director": "Hayao Miyazaki",
  "producer": "Hayao Miyazaki"
}, ]

describe('filterlist', () => {

  it('is a function', () => {
    expect(typeof filterlist).toBe('function');
  });
  it('should return a list of producers', () => {
    expect(filterlist(miniFilms3)).toEqual();
  });

})
