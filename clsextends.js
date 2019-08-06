var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Baseclass = /** @class */ (function () {
    function Baseclass() {
    }
    Baseclass.prototype.myBaseMethod = function () {
        console.log("MyBaseMethod");
    };
    return Baseclass;
}());
var Myclass = /** @class */ (function (_super) {
    __extends(Myclass, _super);
    function Myclass(prop) {
        return _super.call(this) || this;
    }
    Myclass.prototype.myMethod = function () {
        console.log("myMethod");
    };
    return Myclass;
}(Baseclass));
var mc = new Myclass("abcdef");
mc.myMethod();
mc.myBaseMethod();
