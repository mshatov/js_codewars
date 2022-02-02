const plus = b => {
    return a => a + b;
}

const minus = b => {
    return a => a - b;
}

const times = b => {
    return a => a * b;
}

const dividedBy = b => {
    return a => Math.floor(a / b);
}

const zero = arg => arg ? arg(0) : 0;
const one = arg => arg ? arg(1) : 1;
const two = arg => arg ? arg(2) : 2;
const three = arg => arg ? arg(3) : 3;
const four = arg => arg ? arg(4) : 4;
const five = arg => arg ? arg(5) : 5;
const six = arg => arg ? arg(6) : 6;
const seven = arg => arg ? arg(7) : 7;
const eight = arg => arg ? arg(8) : 8;
const nine = arg => arg ? arg(9) : 9;

console.log(nine(plus(three())));
console.log(nine(dividedBy(two())));

// const zero = function (arg) {
//     const num = 0;
//     if(!arg) {
//         return num;
//     } else {
//         return arg(num);
//     }
// }

// const plus = function (b) {
//     return function(a) {
//         return a + b;
//     }
// }

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3