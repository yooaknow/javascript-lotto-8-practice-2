/*
- [ ] 몇 개를 구매했는 지 확인한다. 
- [ ] 처음 금액을 저장해 둔다. 

들어오는 값 -> 문자열 8000
나와야하는 값 -> 1. 숫자 8000 2. 로또 구매 개수  
*/

class LottoAmouts {
constructor(input) {
this.value =this.validate(input); 
this.amount = 0;
  }

validate(input) {
  if (Number(input) < 0) {
      throw new Error('[ERROR] 0 이상이어야 합니다.');
    }

    if (input % 1000 !==0) {
      throw new Error(`[ERROR] ${1000} 단위로만 입력할 수 있습니다.`);
    }

    if (!/^\d+$/.test(input)) {
      throw new Error('[ERROR] 숫자로만 이루어져야 합니다.');
    }

  return input;
}

calculate() {
let LottoMoney = this.value;
return LottoMoney / 1000;
  }
}

export default LottoAmouts;


// const p = new LottoAmouts ("8000");
// Console.print(p.validate("8000"));
// Console.print(p.calculate());