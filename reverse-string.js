/**
 * @param {String} str Original String
 * @returns {string} Reversed String
 **/
var reverseStr = function (str) {
    let arr = []
    let reversed = ''
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
        reversed = str[i] + reversed
    }
    return reversed
};