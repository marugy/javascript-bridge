const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, location) {
    this.printUp(bridge, location);
    this.printDown(bridge, location);
  },
  printUp(bridge, location) {
    let upBridge = [];
    for (let index = 0; index <= location; index++) {
      if (bridge[index] == 1) upBridge.push(" O ");
      if (bridge[index] == 2) upBridge.push(" X ");
      else upBridge.push("   ");
    }
    MissionUtils.Console.print("[" + upBridge.join("|") + "]");
  },
  printDown(bridge, location) {
    let downBridge = [];
    for (let index = 0; index <= location; index++) {
      if (bridge[index] == 3) downBridge.push(" X ");
      if (bridge[index] == 4) downBridge.push(" O ");
      else downBridge.push("   ");
    }
    MissionUtils.Console.print("[" + downBridge.join("|") + "]");
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
