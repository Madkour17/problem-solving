// 1st solution O(nLogN) Time
function sortedSquaredArray(array) {
  const result = [];
  for (let x = 0; x < array.length; x++) {
    result.push(array[x] * array[x]);
  }
  return result.sort((a, b) => a - b);
}

// 2nd solution O(N) Time
function sortedSquaredArrayUsing2Pointers(array) {
  const sortedSquares = [];
  let p1 = 0;
  let p2 = array.length - 1;
  let i = array.length - 1;

  while (p1 !== p2) {
    if (Math.abs(array[p1]) > Math.abs(array[p2])) {
      sortedSquares[i] = array[p1] * array[p1];
      p1++;
    } else {
      sortedSquares[i] = array[p2] * array[p2];
      p2--;
    }
    i--;
  }
  sortedSquares[0] = array[p1] * array[p1];
  return sortedSquares;
}
