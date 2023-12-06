
import { AppState } from "../AppState.js"

export class snack {

  constructor(name, price, img) {
    this.name = name
    this.price = price
    this.image = img



  }

  get snackImage() {
    return `<div onclick="app.SnacksController.buySnack('${this.name}')" class="col-3 border border-dark rounded ">${this.name} ${this.price}
  <button class="btn border-dark rounded">button

  </button>
</div>
</div>`
  }

  get buySnack() {
    return `<div class="row">
    <button id="drawMoney" class="btn border border-dark" onclick="app.SnacksController.addMoney('${this.name})">('${this.price}</button>
      </div>`
  }
}