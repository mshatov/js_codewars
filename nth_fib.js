function nthFibo(n) {
    if(n === 1) return 0;
    let prevFirst = 0,
        prevSecond = 1,
        current = 1;
        
    for(let i = 3; i <= n; ++i) {
        current = prevFirst + prevSecond;
        prevFirst = prevSecond;
        prevSecond = current;
    }
    return current;
}

console.log(nthFibo(50));