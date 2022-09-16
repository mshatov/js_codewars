//Javascript from the Inside #1 : Map

Array.prototype.map1 = function (foo, thisArg) {
  let res = this.slice();

  res.forEach(
    (value, i, arr) => (res[i] = foo.call(thisArg, this[i], i, this))
  );

  return res;
};

console.log([1, 5].map1((value, index, array) => (value *= 2)));
