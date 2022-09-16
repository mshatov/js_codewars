//Javascript from the Inside #2: Filter

Array.prototype.filter = function (foo, thisArg) {
  let res = [],
    length = this.length;

  foo = foo.bind(thisArg);

  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (foo(this[i], i, this)) {
        res.push(this[i]);
      }
    }
  }
  return res;
};
