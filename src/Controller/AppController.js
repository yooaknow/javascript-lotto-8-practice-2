import SampleDomain from "../Domain/SampleDomain.js";
import { Console } from "@woowacourse/mission-utils";
import LottoAmouts from "../Domain/LottoAmount.js";
class AppController {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async run() {
    try {
      const moneyInput = await this.inputView.readMoney(); //로또 구매 금액 저장 

      const Money = new LottoAmouts (moneyInput) // 로또 개수 클래스 선언
      const LottoAmout = Money.calculate(); // 로또 구매 개수 저장 
      // Console.print(LottoAmout);
      // Console.print(moneyInput);
    

      const numberInput = await this.inputView.readNumber();
      const bonusInput = await this.inputView.readBonus();


    } catch (error) {
      this.outputView.printError(error.message);
      throw error;
    }
  }
}

export default AppController;
