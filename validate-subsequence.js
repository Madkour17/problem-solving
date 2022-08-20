// O(N) Time
function validateSubsequence(array, sequence) {
  let p2 = 0;
  for (let p1 = 0; p1 < array.length; p1++) {
    if (array[p1] === sequence[p2]) {
      p2++;
    }
  }
  return p2 === sequence.length;
}
