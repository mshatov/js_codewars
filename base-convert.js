var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
/*
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
*/

function convertToDecimal(number, source) {
    let numLength = number.length;
    let numDecimal = 0;
    let sourceBase = source.length;
    if(sourceBase === 10) return number;
    for (let i = 0, n = numLength - 1; i < numLength; ++i, --n) {
        let numSource = source.indexOf(number[i]);
        numDecimal += (sourceBase ** n) * parseInt(numSource, 10);
    }
    return numDecimal;
}

function reverseStr(string) {
    let strLength = string.length;
    let reversedStr = '';
    for(let i = strLength - 1; i >= 0; --i) {
        reversedStr += string[i];
    }
    return reversedStr;
}

function convertFromDecimal(number, target) {
    let targetBase = target.length;
    let numTarget = '';
    while(number) {
        let remainder = number % targetBase;
        numTarget += target[remainder];
        number = Math.floor(number / targetBase);
    }
    return reverseStr(numTarget);
}

function convert(input, source, target) {
    let numDecimal = convertToDecimal(input, source);
    return convertFromDecimal(numDecimal, target);

}

console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER));