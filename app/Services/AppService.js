import { ProxyState } from "../AppState.js";
import Machine from "../Models/Model.js"

class AppService {
    constructor() {
        console.log("appserv");
    }
    SnackArray() {
        console.log('Service')
    }
    buy(name) {
        ProxyState.snacks = [...ProxyState.snacks, new Machine({})]
    }
}

export const appService = new AppService();
