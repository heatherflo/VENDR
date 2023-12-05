import { router } from './router-config.js';
import { snack } from './models/Vendor.js';
import { SnacksController } from './controllers/SnacksController.js';

class App {

  router = router



  SnacksController = new SnacksController()



}


const app = new App()
// @ts-ignore
window.app = app
