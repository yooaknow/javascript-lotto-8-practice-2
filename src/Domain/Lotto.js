class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) { // ,를 기준으로 split해서 받는 듯. "3","4" -> 배열
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const uniqueArray = [...new Set(numbers)];
    if (uniqueArray.length !== numbers.length) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }

    if (numbers.length === 0) {
      throw new Error('[ERROR] 배열이 비어있습니다.');
    }
  }

getnumber() {
  number = this.numbers;
  return number;
}

  // TODO: 추가 기능 구현
}  

export default Lotto;
