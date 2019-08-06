var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.setAge = function (val) {
        if (val < 0 || val > 100)
            throw new Error("invalid age");
        this._age = val;
    };
    person.prototype.getAge = function () {
        return this._age;
    };
    return person;
}());
var p = new person();
p.name = "balaji";
p.setAge(-20);
