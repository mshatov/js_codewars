function digital_root(num) {
    if(num < 10) return num;
    let sum = 0;
    while(num) {
        let digit = num % 10;
        num = Math.floor(num / 10);
        sum += digit;
    }
    return digital_root(sum);
}
console.log(digital_root(493193));

//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//792038 -->2