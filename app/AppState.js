import Value from "./Models/Value.js"
import Machine from "./Models/Model.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

// all data for entire applcation exists within this object
let Lays = new Machine('Lays Classic', 1, '//placehold.it/200x200')
let Doritos = new Machine('Doritos', 1, '//placehold.it/200x200')
let Poptart = new Machine('Pop Tart', 2, '//placehold.it/200x200')

class AppState extends EventEmitter {
  /** @type {Value[]} */

  snacks = [Lays, Doritos, Poptart]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
