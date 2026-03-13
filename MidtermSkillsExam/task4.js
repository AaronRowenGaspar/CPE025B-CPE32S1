const memo = {};
function power(base, exp) {
    var result = 1;
    for (i = 0; i < exp; i++) {
    result *= base;
    }
    return result;
}



// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
