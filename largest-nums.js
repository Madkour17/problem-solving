/**
 * @param {arr} array of arrays
 * @returns {number[]} array of max numbers in each child array
 * @description Return an array consisting of the largest number from each provided sub-array.
 **/
function largestNums(arr) {
    let maxNumsArr = []
    for (let x = 0; x < arr.length; x++) {
        let maxElement = arr[x][0]
        for (let y = 0; y < arr[x].length; y++) {
            let innerArr = arr[x]
            if (innerArr[y] > maxElement) {
                maxElement = innerArr[y]
            }
        }
        maxNumsArr.push(max)
    }
    return maxNums;
}
