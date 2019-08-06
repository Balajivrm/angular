var MyClass = /** @class */ (function () {
    function MyClass(prop) {
        this.MyProp = prop;
        console.log("executed");
    }
    MyClass.prototype.myMethod = function () {
        console.log("mymethod");
    };
    return MyClass;
}());
var mc = new MyClass("abcdef");
mc.myMethod();
