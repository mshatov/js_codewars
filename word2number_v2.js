const digit = {
    'zer': 0,
    'one': 1,
    'two': 2,
    'thr': 3,
    'fou': 4,
    'fiv': 5,
    'six': 6,
    'sev': 7,
    'eig': 8,
    'nin': 9,
    // 'ten': 10,
    'ele': 1,
    'twe': 2,
    'for': 4,
    'fif': 5,
    'thi': 3,
}

function num(str) {
    str = str.replace(/(-)|( and )/g, ' ');
    str = str.replace(/seven/gi, 'sevaan');
    str = str.replace(/ty/gi, ' ty');
    str = str.replace(/teen|lve$|ven$/gi, ' teen');
    str = str.replace(/ten/gi, 'zero teen');
    const arr = str.split(' ');
    const outDigits = [];

    if (str === 'zero') return 0;
    if (str === 'one million') return 1000000;

    for (let i = 0; i < arr.length; ++i) {
        let word = arr[i];
        let numDigit = digit[word.slice(0, 3)];
        numDigit ? outDigits.push(numDigit) : outDigits.push(word);
    }
    console.log(outDigits)
    let sum = 0;
    for(let i = 0; i < outDigits.length; ++i) {
        let current = outDigits[i],
            next = outDigits[i + 1];
        if(current === 'zero') current = 0;
        if(next === 'hundred') sum += current * 100;
        if(next === 'ty') sum += current * 10;
        if(next === 'teen') sum += current + 10;
        if(next === 'thousand') {
            if(typeof(current) !== 'number') {
                current = outDigits[i - 1];
                sum -= current;
            }
            sum = (current + sum) * 1000;
        }
        if(next === undefined && typeof(current) === 'number') sum += current;
    }
    return sum;
}


// console.log(num('seven hundred twenty-three thousand three hundred eighty-nine'));
// console.log(num('six hundred sixty-six thousand six hundred seventeen'));
// console.log(num('one hundred eleven'));
// console.log(num('sixty thousand ten'));
// console.log(num('one hundred seven'));
console.log(num('ten'))

/*
number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"
six hundred sixty-six thousand six hundred sixty-six 666666
seven hundred twenty-three thousand three hundred eighty-nine 723389
*/
