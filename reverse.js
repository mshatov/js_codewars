
//weirdReverse=a=>a.map((i,x,y)=>y[y.length-x-1])
//*************************|
weirdReverse=a=>a.sort(i=>1)
console.log(weirdReverse(['a','b','c']))


reverse=a=>[...a].map(a.pop,a)
console.log(reverse([1, 2, 3, 4]))
