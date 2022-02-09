//import { example } from '../src/data.js';

import Films from '../src/data.js';


describe('data', () => {
  const film = new Films(1, 'title', 'description', 'director', 'producer', 'poster', 'date', 'score')

  it('should be a function', () => {
    expect(typeof Films).toBe('function');
  });

  it('sets Id', () => {
    film.setId(2)
    expect(film.getId()).toEqual(2);
  })

  it('sets title', () => {
    film.setTitle('newtitle')
    expect(film.getTitle()).toEqual('newtitle');
  })

  it('sets description', () => {
    film.setDescription('newDescription')
    expect(film.getDescription()).toEqual('newDescription');
  })

  it('sets Director', () => {
    film.setDirector('newDirector')
    expect(film.getDirector()).toEqual('newDirector');
  })
  

  it('sets Producer', () => {
    film.setProducer('newProducer')
    expect(film.getProducer()).toEqual('newProducer');
  })

  it('sets Poster', () => {
    film.setPoster('newPoster')
    expect(film.getPoster()).toEqual('newPoster');
  })

  it('sets Date', () => {
    film.setDate('newDate')
    expect(film.getDate()).toEqual('newDate');
  })

  it('sets Score', () => {
    film.setScore('newScore')
    expect(film.getScore()).toEqual('newScore');
  })
})