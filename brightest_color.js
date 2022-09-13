function findValue(color) {
    const r = parseInt(color.slice(1, 3), 16),
    g = parseInt(color.slice(3, 5), 16),
    b = parseInt(color.slice(5, 7), 16);
    return Math.max(r, g, b);
}

function findIndexOfMax(arr) {
    let index = 0,
    max = arr[index];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if(current > max) {
            max = current;
            index = i;
        }
    }
    return index;
}

function brightest(colors){
    const values = colors.map(color => findValue(color));
    return colors[findIndexOfMax(values)];
}

brightest(["#FFFFFF", "#123456", "#000000"]);

// (["#001000", "#000000"], "#001000");
// (["#ABCDEF", "#123456"], "#ABCDEF");
// (["#00FF00", "#FFFF00"], "#00FF00");
// (["#FFFFFF", "#1234FF"], "#FFFFFF");
// (["#FFFFFF", "#123456", "#000000"], "#FFFFFF");