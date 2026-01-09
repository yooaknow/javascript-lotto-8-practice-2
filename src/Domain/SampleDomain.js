/*
- [x] 사용자가 산 로또의 갯수만큼 Lotto.js의 클래스를 생성한다. 
받는 값은 number / 숫자를 입력 받음. -> 입력받은 숫자만큼 Lotto 생성 
*/

import ERROR from"../constants/ErrorMessage.js";


class SampleDomain {
constructor(input) {
this.value =this.validate(input); 
  }

validate(input) {
  if (input.trim() === "") {
    throw new Error(ERROR.INVALID_INPUT);
  }
  return input;
}

calculate() {
// 순수 계산
return this.value;
  }
}

export default SampleDomain;