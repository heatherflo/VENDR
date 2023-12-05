
import { AppState } from "../AppState.js"

export class snack {

  constructor(name, price, img) {
    this.name = name
    this.price = price
    this.image = img



  }

  get snackImage() {
    return `<div class="col-3 border border-dark rounded ">${this.name} ${this.price}
  <button class="btn border-dark rounded">button

  </button>
</div>
</div>`
  }
}