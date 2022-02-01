function createPhoneNumber(numbers){
    let template = ["(", "", "", "", ")", " ", "", "", "", "-", "", "", "", ""];
    let counter = 0;
    for(let i = 0; i < template.length; ++i) {
        if(template[i]) {
            continue;
        } else {
            template[i] = numbers[counter];
            counter++;
        }        
    }
    return template.join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));