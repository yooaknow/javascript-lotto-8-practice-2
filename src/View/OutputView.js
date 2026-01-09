import { Console } from "@woowacourse/mission-utils";

class OutputView {

  printResult() {
    Console.print(`실행결과`);
  }

  printWinner(result) {
    Console.print(`결과 : ${result}`);
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
