import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { snack } from './models/Vendor.js';


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  snacks = [
    new snack('Cookie', .25, '🍪'),
    new snack('Waffle', .50, '🧇'),
    new snack('Hot Dog', 1.00, '🌭'),
    new snack('taco', 1.25, '🌮'),
    new snack('Shrimp', .10, '🍤'),
    new snack('Turkey Leg', 3.00, '🍗')

  ]
  money = 0

}

export const AppState = createObservableProxy(new ObservableAppState())
console.log(AppState.snacks)