export default class People {
    constructor(people_data) {
        this.id = people_data['id']
        this.name = people_data['name']
        this.img = people_data['img']
        this.gender = people_data['gender']
        this.age = people_data['age']
        this.eye_color = people_data['eye_color']
        this.hair_color = people_data['hair_color']
        this.specie =  people_data['specie']
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getImg() {
        return this.img
    }

    getGender() {
        return this.gender
    }

    getAge() {
        return this.age
    }

    getEyeColor() {
        return this.eye_color
    }

    getHairColor() {
        return this.hair_color
    }

    getSpecie() {
        return this.specie
    }

    setId(newId) {
        this.id = newId
    }

    setName(newName) {
        this.name = newName
    }

    setImg(newImg) {
        this.img = newImg
    }

    setGender(newGender) {
        this.gender = newGender
    }

    setAge(newAge) {
        this.age = newAge
    }
    

    setEyeColor(newEyeColor) {
        this.eye_color = newEyeColor
    }

    setHairColor(newHairColor) {
        this.hair_color = newHairColor
    }

    setSpecie(newSpecie) {
        this.specie = newSpecie
    }

}
