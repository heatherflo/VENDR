
import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";


export class SnacksController {
  constructor() {
    console.log('snacks are good')
    this.drawSnack()

  }

  addMoney() {
    console.log('button clicked')
    snacksService.addMoney()
    this.drawMoney()
  }

  drawMoney() {
    console.log('drawing money')
    document.getElementById('drawMoney').innerText = AppState.money.toString()

  }

  drawSnack() {
    const snacks = AppState.snacks
    let content = ""
    snacks.forEach(snack => content += snack.snackImage)
    document.getElementById('snackImage').innerHTML = content
    console.log("snack appears", snacks)
  }

  buySnack(snackName) {
    snacksService.buySnack(snackName)
    console.log('buy snack')
    this.drawMoney()


  }
}
