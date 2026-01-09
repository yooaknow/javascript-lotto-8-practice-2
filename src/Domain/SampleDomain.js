/*
여기서는 자동차 이름에 관한 로직을 다 넣으면 될듯
예를 들어서 자동차의 문자열을 입력 받아서, split해서 배열로 바꾸고
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