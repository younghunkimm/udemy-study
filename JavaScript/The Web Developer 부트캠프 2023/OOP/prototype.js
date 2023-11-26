String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
}
console.log("I LOVE YOU".yell());




Array.prototype.pop = function() {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF";
}
console.log([4,5,6].pop());