import {PlayersController} from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  playerController = new PlayersController();
  // valuesController = new ValuesController();
  PlayersController = new PlayersController();
}

window["app"] = new App();
