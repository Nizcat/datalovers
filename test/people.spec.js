import People from '../src/people.js';


describe('People', () => {
  const people = new People("id", 'name', 'img', 'gender', 'age', 'poster', 'date', 'score')

  it('should be a function', () => {
    expect(typeof People).toBe('function');
  });

  it('sets Id', () => {
    people.setId(2)
    expect(people.getId()).toEqual(2);
  })

  it('sets name', () => {
    people.setName(3)
    expect(people.getName()).toEqual(3);
  })

  it('sets img', () => {
    people.setImg(3)
    expect(people.getImg()).toEqual(3);
  })

  it('sets Gender', () => {
    people.setGender(3)
    expect(people.getGender()).toEqual(3);
  })
  

  it('sets Age', () => {
    people.setAge(3)
    expect(people.getAge()).toEqual(3);
  })

  it('sets Eye Color', () => {
    people.setEyeColor(3)
    expect(people.getEyeColor()).toEqual(3);
  })

  it('sets Hair Color', () => {
    people.setHairColor(3)
    expect(people.getHairColor()).toEqual(3);
  })

  it('sets Specie', () => {
    people.setSpecie(3)
    expect(people.getSpecie()).toEqual(3);
  })


})