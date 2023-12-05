import { AppState } from "../AppState.js";


class SnacksService {

  addMoney() {
    AppState.money += .25
    console.log('added money', AppState.money);
  }

}

export const snacksService = new SnacksService()