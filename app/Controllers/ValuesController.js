import { ProxyState } from "../AppState.js";
// import { valuesService } from "../Services/ValuesService.js";


//controllers do not hold any data

//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}

//Public
export default class ValuesController {
  constructor() {
    //observer: pass the draw function to be called when the 'values' property gets updated
    //ProxyState.on("values", _draw);
    //manually call draw the first time
    //_draw()
  }

  addValue() {
    valuesService.addValue()
  }

}
