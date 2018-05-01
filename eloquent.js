// 1. Minimum
function min(a, b) {
    if (a < b) return a;
    else if (a === b) return "Numbers are even";
    else return b;
  }

// 2. Recursion
function isEven(num) {
    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(num + (-num * 2));
    else return isEven(num - 2);
}
// The supplied answer shows a much simpler way to convert num to positive, woops.

// 3. Bean counting
function countBs(str) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "B") count++;
    }
    return count;
}

function countChar(str, char) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
}

function betterCountBs(str) {
    return countChar(str, "B");
}  

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(betterCountBs("BBCBbB"));
// → 4