/*
- [] 사용자가 산 로또의 갯수만큼 Lotto.js의 클래스를 생성한다. 
- 6개의 수와 보너스 수가 필요함 
- 랜덤값을 통해 지정해 주어야 함. 

*/


import { Console } from "@woowacourse/mission-utils";

class Lottogenerater {
constructor() {
this.Lotto = [];
this.Bonus = []; 
this.run();
  }

pickUniqueNumbersInRange(min, max, count) {
  const uniqueNumbers = new Set(); // 중복을 허용하지 않는 Set
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
    this.Lotto = Array.from(uniqueNumbers);
  }
  return Array.from(uniqueNumbers); // Set을 배열로 변환하여 반환
}

pickUniqueBonusInRange(min, max, count) {
  const uniqueBonus = new Set(); 
  while (uniqueBonus.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueBonus.add(randomNumber);
    this.Bonus= Array.from(uniqueBonus);
  }
  return Array.from(uniqueBonus); 
}

run () {
  this.Bonus = this.pickUniqueBonusInRange(1,45,1);
  this.Lotto = this.pickUniqueNumbersInRange(1,45,6);
} 
}

export default Lottogenerater;

// const p = new Lottogenerater();
// Console.print(p);
