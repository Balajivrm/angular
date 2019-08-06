"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
var calc = new Calculator();
calc.add(10, 20);
