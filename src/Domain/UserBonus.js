/*
- [] 보너스 번호를 검증한다.
- [ ] 잘못된 상태일 경우 예외를 발생시킨다. (숫자가 아님, 6개의 수가 아님 등)
*/

import { Console } from "@woowacourse/mission-utils";

class UserBonus {
constructor(input) {
this.value =this.validate(input); 
  }

validate(input) {
  if (Number(input) < 0) {
      throw new Error('[ERROR] 0 이상이어야 합니다.');
    }

    if (!/^\d+$/.test(input)) {
      throw new Error('[ERROR] 숫자로만 이루어져야 합니다.');
    }

  return input;
}
}

export default UserBonus;
