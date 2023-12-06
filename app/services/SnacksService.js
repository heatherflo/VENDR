import { AppState } from "../AppState.js";


class SnacksService {

  addMoney() {
    AppState.money += .25
    console.log('added money', AppState.money);
  }
  buySnack(snackName) {
    const snacks = AppState.snacks
    let money = AppState.money
    const snack = snacks.find(snack => snack.name == snackName)
    console.log('[SNACK]', snack)
    if (snack.price <= money) {
      console.log('[MONEY BEFORE]', money)
      money -= snack.price
      console.log('[MONEY AFTER]', money)
    } else {
      window.alert("You don't have enough $")
    }
    console.log('is this working?')

  }

}

export const snacksService = new SnacksService()