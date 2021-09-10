function palindrome(str) {
    const arr = []
    let strReverse = ""
    str = str.toLowerCase().replace(/[^0-9a-z]/gi, '')

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    for (let i = 0; i < str.length; i++) {
        strReverse += arr.pop()
    }

    return str === strReverse ? true : false
}
