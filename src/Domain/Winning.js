class Winning {
  constructor(FinalLotto, numberInputArray, UserBonus) {
    this.FinalLotto = FinalLotto;             
    this.numberInputArray = numberInputArray; 
    this.UserBonus = UserBonus;               

    this.one = 0;
    this.two = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;

    this.find();
  }

  find() {
    for (let k = 0; k < this.FinalLotto.count; k++) {
      const lotto = this.FinalLotto.Lotto[k].Lotto;
      const lottoStrings = lotto.map(String);

      let commonCount = 0;

      for (let i = 0; i < lottoStrings.length; i++) {
        if (this.numberInputArray.includes(lottoStrings[i])) {
          commonCount++;
        }
      }

      this.checkRank(commonCount, lottoStrings);
    }
  }

  checkRank(commonCount, lottoStrings) {
    if (commonCount === 6) {
      this.one++;
    } else if (commonCount === 5 && this.hasBonus(lottoStrings)) {
      this.two++;
    } else if (commonCount === 5) {
      this.three++;
    } else if (commonCount === 4) {
      this.four++;
    } else if (commonCount === 3) {
      this.five++;
    }
  }

 hasBonus(lottoStrings) {
  if (this.numberInputArray.includes(this.UserBonus.UserBonus)) {
    return false;
  }

  return lottoStrings.includes(this.UserBonus.UserBonus);
}
}

export default Winning;
