export const calculateBetslipWinnings = (
  gameType,
  gameTypeNumber,
  games,
  totalStake
) => {
  if (gameType === "nap") {
    if (games.length !== gameTypeNumber) return null;
  } else {
    if (games.length <= gameTypeNumber) return null;
  }

  let odds = [];
  let winningObj = {
    stake: null,
    minOdd: null,
    maxOdd: null,
    minWin: null,
    maxWin: null,
    minBonus: null,
    maxBonus: null,
    totalPotWin: null,
  };

  for (let curr of games) {
    odds.push(curr.odd);
  }

  if (gameType === "nap") {
    // nap calculations
    winningObj.maxOdd = roundUp(product(odds));
    winningObj.maxWin = roundUp(totalStake * winningObj.maxOdd);
  } else {
    let row = combination(games.length, gameTypeNumber);
    let stakePerRow = Number(totalStake) / row;
    let [minOdd, maxOdd] = getMaxAndMinOdd(odds, gameTypeNumber);

    winningObj.stake = stakePerRow;
    winningObj.minOdd = roundUp(minOdd);
    winningObj.maxOdd = roundUp(maxOdd);

    winningObj.minWin = roundUp(minOdd * stakePerRow);
    winningObj.maxWin = roundUp(maxOdd * stakePerRow);

    winningObj.minBonus = roundUp(0.11 * winningObj.minWin);
  }

  winningObj.maxBonus = roundUp(0.11 * winningObj.maxWin);
  winningObj.totalPotWin = roundUp(winningObj.maxWin + winningObj.maxBonus);

  return winningObj;
};

const getMaxAndMinOdd = (odds, gameTypeNumber) => {
  let combs = [];

  const helper = (idx, curr) => {
    if (curr.length === gameTypeNumber) {
      combs.push(product(curr));
      return;
    }
    if (idx >= odds.length) {
      return;
    }
    for (let i = idx; i < odds.length; i++) {
      curr.push(odds[i]);
      helper(i + 1, [...curr]);
      curr.pop();
    }
  };
  helper(0, []);

  let min = roundUp(Math.min(...combs));
  let max = roundUp(sum(combs));
  return [min, max];
};

const combination = (n, r) => {
  if (r > n) {
    throw new Error("invalid paramters. r cannot be greater than n.");
  }
  let diff = factorial(n - r);
  let nF = factorial(n);
  let rF = factorial(r);
  return nF / (rF * diff);
};

const sum = arr => {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res;
};

const product = arr => {
  let res = 1;

  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  }

  return res;
};

const factorial = val => {
  let res = 1;

  while (val > 1) {
    res *= val;
    val -= 1;
  }

  return res;
};

const roundUp = val => {
  return Math.round((val + Number.EPSILON) * 100) / 100;
};
