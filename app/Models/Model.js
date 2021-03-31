export default class Machine {
    constructor(name, price, img, id = Math.random()) {
        this.name = name
        this.price = price
        this.img = img
        this.id = id
    }

}