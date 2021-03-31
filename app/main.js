//import ValuesController from "./Controllers/ValuesController.js";
import AppController from "./Controllers/AppController.js"

// entry point into app, starts up all of the controllers, connects the app to the DOM
class App {
  // valuesController = new ValuesController()
  AppController = new AppController()
}

window["app"] = new App();
