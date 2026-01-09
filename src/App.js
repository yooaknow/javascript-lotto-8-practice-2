import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import AppController from "./Controller/AppController.js";

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const controller = new AppController(inputView, outputView);
    await controller.run();
  }
}

export default App;
