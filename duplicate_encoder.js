function duplicateEncode(word){
    const arr = word.toLowerCase().split('');
    const count = {};

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      count[current] = count[current] ? (count[current] + 1) : 1;
    }

    let res = '';
    for(let i = 0; i < arr.length; i++) {
        const current = arr[i];
        res += count[current] === 1 ? '(' : ')';
    }

    return res;
}

console.log(duplicateEncode("Success"));

//duplicateEncode("Success"),")())())","should ignore case");