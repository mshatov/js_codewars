
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
//combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }



function combine(...objs) {
    let res = {};
    for(let i = 0; i < objs.length; ++i) {
        Object.keys(objs[i]).forEach(key => {
            if(!res[key]) {
                res[key] = objs[i][key];
            } else {
                res[key] += objs[i][key];
            }
        });
    }
    return res;
}

combine(objA, objB);









