const START_PAGE = 1;
const LAST_PAGE = 400;

function isValidPage(pages) {
  const [leftPage, rightPage] = pages;
  if (leftPage <= START_PAGE || rightPage >= LAST_PAGE) {
    return false;
  }
  if (leftPage >= rightPage) {
    return false;
  }
  if (leftPage % 2 !== 1 || leftPage + 1 !== rightPage) {
    return false;
  }
  return true;
}

function findMaxSumOrMultiply(pageNum) {
  const strPageNumArr = pageNum.toString().split("");

  const sum = strPageNumArr.reduce((reducer, strNum) => {
    return reducer + parseInt(strNum, 10);
  }, 0);

  const multiplied = strPageNumArr.reduce((reducer, strNum) => {
    return reducer * parseInt(strNum, 10);
  }, 1);

  return Math.max(sum, multiplied);
}

/**
 *
 * @param {[number, number]} pobi
 * @param {[number, number]} crong
 * @returns {number} 0: tie, 1: pobi, 2: crong, exception: -1
 */

// expect(problem1([97, 98], [197, 198])).toEqual(0);
function problem1(pobi, crong) {
  if (!isValidPage(pobi) || !isValidPage(crong)) {
    return -1;
  }

  // 각 페이지의 (좌, 우) 각자리 수를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다
  // 좌, 우의 가장 큰 수를 비교하나다
  // 크롱과 포비가 가진 가장 큰 수를 비교해 승자를 찾는다
  const pobiScore = Math.max(
    findMaxSumOrMultiply(pobi[0]),
    findMaxSumOrMultiply(pobi[1])
  );

  const crongScore = Math.max(
    findMaxSumOrMultiply(crong[0]),
    findMaxSumOrMultiply(crong[1])
  );

  if (pobiScore === crongScore) {
    return 0;
  }

  if (pobiScore > crongScore) {
    return 1;
  }

  return 2;
}

module.exports = problem1;
