
/*
- [x] 사용자가 산 로또의 갯수만큼 Lotto.js의 클래스를 생성한다. 
받는 값은 number / 숫자를 입력 받음. -> 입력받은 숫자만큼 Lotto 생성 
*/

import { Console } from "@woowacourse/mission-utils";
import Lottogenerater from "./LottoGenerate.js";

class Lottos {
constructor(count) {
this.count= count;
this.Lotto = [];
this.finalLotto();
  }

finalLotto() {
for (let i = 0; i < this.count; i++) {
  const p = new Lottogenerater();
  this.Lotto.push(p);
} 
  }
}

export default Lottos;

// Console.print(new Lottos(9));
// Console.print(JSON.stringify(new Lottos(9), null, 2));

