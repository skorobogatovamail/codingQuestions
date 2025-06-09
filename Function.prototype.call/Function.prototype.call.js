Function.prototype.myCall = function (thisArg, ...argArray) {
    return this.apply(thisArg, argArray);
};
