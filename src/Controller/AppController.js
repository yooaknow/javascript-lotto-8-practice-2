import SampleDomain from "../Domain/SampleDomain.js";

class AppController {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async run() {
    try {
      const moneyInput = await this.inputView.readMoney();
      const numberInput = await this.inputView.readNumber();
      const bonusInput = await this.inputView.readBonus();


    } catch (error) {
      this.outputView.printError(error.message);
      throw error;
    }
  }
}

export default AppController;
