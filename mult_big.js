function splitNum(num) {
    return [Math.floor(num / 10), num % 10];
}

function multiply(a, b) {
    const arrA = a.split('').map(item => parseInt(item)),
          arrB = b.split('').map(item => parseInt(item));

    let max, min, delta;

    max = arrA.length > arrB.length ? arrA : arrB;
    min = arrA.length <= arrB.length ? arrA : arrB;
    delta = Math.abs(arrA.length - arrB.length);

    const arrAdd = new Array(delta);
    min.splice(0, 0, ...arrAdd);

    const res = new Array(min.length + max.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = 0;
    }
    
    //school algorithm O(n^2)
    for (let i = min.length - 1, n = 0; i >= 0; i--, n++) {
        let resCounter = res.length - 1 - n;
        let x = (min[i]) || 0;
        let digMem = 0;

        for (let j = max.length - 1; j >= 0; j--) {
            let y = (max[j]) || 0;

            // let prod = `${x * y + digMem}`;
            // let digPut = parseInt(prod[1]) || 0;
            // digMem = parseInt(prod[0]);
            let prod = x * y + digMem;
            let digPut = splitNum(prod)[1] || 0;
            digMem = splitNum(prod)[0];
            
            if(prod < 10) {
                digPut = prod;
                digMem = 0;
            }
            digPut += res[resCounter];
            res[resCounter] = digPut;
            if(digPut >= 10) {
                //leave last digit
                res[resCounter] = splitNum(digPut)[1];
                //first digit add to digMem
                digMem += splitNum(digPut)[0];
            }
            resCounter--;
            if (j === 0) {
                res[resCounter] += digMem;
            }
        }
    }
    return res.join('').replace(/^0*/g, '') || '0';
}

console.log(multiply("58608473622772837728372827", "7586374672263726736374"));


// (multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
// (multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
// (multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
// Test.assertEquals(multiply("2" ,"0"), "0");
// Test.assertEquals(multiply("0", "30"), "0");
// Test.assertEquals(multiply("0000001", "3"), "3");
// Test.assertEquals(multiply("1009", "03"), "3027");