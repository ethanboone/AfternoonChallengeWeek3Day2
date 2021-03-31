import { ProxyState } from "../AppState.js"
import { appService } from "../Services/AppService.js"

function _draw() {
    console.log(ProxyState.snacks)
    let snacks = ProxyState.snacks
    let element = document.getElementById('app')
    let numbers = document.getElementById('buy')
    let template = ''
    numbers.innerHTML += `<button class="btn" onclick="app.AppController.buy('A1')">A1</button><button class="btn" onclick="app.AppController.buy('A2')">A2</button><button class="btn" onclick="app.AppController.buy('A3')">A3</button>`
    let snackTemplate = ''
    snacks.forEach((element) => {
        snackTemplate += `
        <div class="col-3 d-flex flex-column text-center">
        <img src="${element.img}">
        <p>${element.name}</p>
        <p>$${element.price}</p>
        </div>
        `
    })
    element.innerHTML = snackTemplate
}

export default class AppController {
    constructor() {
        _draw()
        ProxyState.on('snacks', _draw)
        console.log("AppController")
    }
    addSnack() {
        appService.addSnack()
    }
    buy(name) {
        appService.buy(name)
        console.log("buying")
    }
}