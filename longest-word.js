/**
 * @param {string} str Sentence
 * @returns {int} Length of longest word in provided sentence
 **/
function findLongestWordLength(str) {
    let wordsArr = str.split(/\s+/)
    let max = 0
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > max) {
            max = wordsArr[i].length
        }
    }
    return max;
}