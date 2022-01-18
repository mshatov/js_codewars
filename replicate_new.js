function nouveau (Constructor, ...args) {
    const newInstance = {};
    newInstance.__proto__ = Constructor.prototype;
    let res = Constructor.apply(newInstance, args);
    if(typeof(res) !== 'object' && typeof(res) !== 'function') res = null;
    
    return res || newInstance;
}