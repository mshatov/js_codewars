const digitAsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const firstTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen'];
const nextTens = {
    0: 'zero',
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    8: 'eigh',
};

function makeHundredString(numAsArray) {
    let numAsWord = digitAsWord[numAsArray[0]] + ' hundred ';
    if (numAsArray[1] === 1) {
        if (numAsArray[2] <= 5 || numAsArray[2] === 8) {
            return numAsWord += firstTen[numAsArray[2]]
        } else {
            numAsWord += digitAsWord[numAsArray[2]] + 'teen ';
        }
        return numAsWord;
    } else {
        let suffix = numAsArray[2] === 0 ? 'ty ' : 'ty-';
        if (numAsArray[1] <= 5 || numAsArray[1] === 8) {
            numAsWord += nextTens[numAsArray[1]] + suffix;
        } else {
            numAsWord += digitAsWord[numAsArray[1]] + suffix;
        }
    }
    numAsWord += digitAsWord[numAsArray[2]];

    return numAsWord;
}

function makeDigitsArray(num) {
    const digitsArray = [0, 0, 0, 0, 0, 0];
    let position = digitsArray.length - 1;

    while (num) {
        let digit = num % 10;
        digitsArray[position] = digit;
        num = Math.floor(num / 10);
        --position;
    }
    return [digitsArray.slice(0, 3), digitsArray.slice(3)];
}

function removeRedundant(numAsWord) {
    return numAsWord.replace(/(zero hundred)|(zeroty-)|(zero)|( zeroty-)|( zeroty)/g, ' ').trim();
}

function number2words(n) {
    let numberAsArray = makeDigitsArray(n);
    let res = '';
    if (n < 10) return digitAsWord[n];

    if (n < 1000) {
        res = removeRedundant(makeHundredString(numberAsArray[1]));
    } else {
        res = (removeRedundant(makeHundredString(numberAsArray[0]))
            + ' thousand '
            + removeRedundant(makeHundredString(numberAsArray[1])))
            .trim();
    }
    return res;
}

console.log(number2words(301));

/*'zero',
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine',
'ten',
'eleven',
'twelve',
'twenty',
'thirty',
'fifty',
'hundred',
'thousand'
*/
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
*/