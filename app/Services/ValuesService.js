import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  // add new value to the end of the values array
  // .push() will not trigger the listener
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

// Singleton pattern: only instantiates one time, so only one instance of ValuesService will ever exist

export const valuesService = new ValuesService();

