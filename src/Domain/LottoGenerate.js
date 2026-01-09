/*
- [] 사용자가 산 로또의 갯수만큼 Lotto.js의 클래스를 생성한다. 
- 6개의 수와 보너스 수가 필요함 
- 랜덤값을 통해 지정해 주어야 함. 

*/

import { Random } from "@woowacourse/mission-utils";

class Lottogenerater {
  constructor() {
    this.Lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.Bonus = Random.pickUniqueNumbersInRange(1, 45, 1);
  }
}

export default Lottogenerater;

// const p = new Lottogenerater();
// Console.print(p);
