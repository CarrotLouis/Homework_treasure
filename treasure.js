// 寻宝游戏逻辑
class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static findBoat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random();
        if (success < 0.8) {
          resolve("找到了渡河的小船！");
        } else {
          reject("没有船，无法渡河！");
        }
      }, 1200);
    });
  }

  static crossRiver() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("成功渡河，前往神庙！");
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }
}

// 角色移动
function movePlayer(x) {
  const player = document.getElementById("player");
  player.style.left = x + "px";
}

// 日志输出
function logMessage(msg) {
  const logDiv = document.getElementById("log");
  logDiv.textContent += msg + "\n";
}

// async/await 寻宝流程
async function findTreasure() {
  try {
    logMessage("开始寻宝...");
    movePlayer(100);
    const clue = await TreasureMap.getInitialClue();
    logMessage(clue);

    movePlayer(200);
    const location = await TreasureMap.decodeAncientScript(clue);
    logMessage(location);

    movePlayer(300);
    const boat = await TreasureMap.findBoat();
    logMessage(boat);

    movePlayer(400);
    const cross = await TreasureMap.crossRiver();
    logMessage(cross);

    movePlayer(500);
    const box = await TreasureMap.searchTemple(location);
    logMessage(box);

    movePlayer(600);
    const treasure = await TreasureMap.openTreasureBox();
    logMessage(treasure);

    logMessage("冒险完成！");
  } catch (error) {
    logMessage("任务失败: " + error);
  }
}

// 页面加载后自动运行
window.onload = findTreasure;
