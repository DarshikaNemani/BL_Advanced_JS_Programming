let calculator = {
    a: 10,
    b: 15,
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

console.log(calculator.sum());
console.log(calculator.mul());