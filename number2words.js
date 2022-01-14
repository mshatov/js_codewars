const digitAsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const numberTemplate = [0, 0, 0, 0, 0, 0];

function printWordFromDigit (digit) {
    console.log(digitAsWord[digit]);
}

function iterateNumber (numAsArray) {
    for (let digit in numAsArray) {
        printWordFromDigit(numAsArray[digit]);
    }
}

function number2words(n){
    let position = numberTemplate.length - 1;

    while (n) {    
        let digit = n % 10;
        numberTemplate[position] = digit;
        n = Math.floor(n / 10);
        --position;
    }
}

number2words(183456);
console.log(numberTemplate);
iterateNumber(numberTemplate);

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