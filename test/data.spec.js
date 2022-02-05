//import { example } from '../src/data.js';

import Films from '../src/data.js';


describe('data', () => {
  it('should be a function', () => {
    expect(typeof Films).toBe('function');
  });

  it('sets the title', () => {
    const film = new Films('a', 'b', 'c')
    film.setTitle('other')
    expect(film.getTitle()).toEqual('other');
  })
})

/* expect(new Films()).toBeInstanceOf(Films);
expect(() => {}).toBeInstanceOf(Function);
expect(new Films()).toBeInstanceOf(Function); */

/* describe('Films', () => {
  const films = new Films()
  it('is a function', () => {
    expect(films instanceof Films).toBe('true');
  });
}); */
