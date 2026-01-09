/*


    8개를 구매했습니다.
    [8, 21, 23, 41, 42, 43]
    [3, 5, 11, 16, 32, 38]
    [7, 11, 16, 35, 36, 44]
    [1, 8, 11, 31, 41, 42]
    [13, 14, 16, 38, 42, 45]
    [7, 11, 30, 40, 42, 43]
    [2, 13, 22, 32, 38, 45]
    [1, 3, 5, 14, 22, 45]
-------------------------------

    당첨 통계
    ---
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    총 수익률은 62.5%입니다.

    const winningDetails = [
    { rank: "3개 일치 (5,000원)", count: "1개" },
    { rank: "4개 일치 (50,000원)", count: "0개" },
    { rank: "5개 일치 (1,500,000원)", count: "0개" },
    { rank: "5개 일치, 보너스 볼 일치 (30,000,000원)", count: "0개" },
    { rank: "6개 일치 (2,000,000,000원)", count: "0개" },

    const totalReturnRate = "62.5%";
  지금 들어오는 값. 
    Lottos {
  count: 8,
  Lotto: [
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] },
    Lottogenerater { Lotto: [Array], Bonus: [Array] }
  ]
}
];

*/

import { Console } from "@woowacourse/mission-utils";

class OutputView {

  printResult(FinalLotto) {
    Console.print(`${FinalLotto.count}개를 구매했습니다.`);

    for (let i = 0; i < FinalLotto.count; i++) {
        const numbers = FinalLotto.Lotto[i].Lotto.join(", ");
        Console.print(`[${numbers}]`);
    }
  }
  printWinner(winningDetails, totalReturnRate) {
    winningDetails.forEach(item => {
    Console.print(`${item.rank} - ${item.count}`);
});
    Console.print(`총 수익률은 ${totalReturnRate}입니다.`);
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
