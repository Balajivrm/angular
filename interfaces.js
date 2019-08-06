var userService = /** @class */ (function () {
    function userService() {
    }
    userService.prototype.save = function (data) {
    };
    userService.prototype["delete"] = function (id) {
    };
    userService.prototype.get = function () {
        console.log("getting users");
    };
    userService.prototype.getById = function () {
    };
    return userService;
}());
var svc = new userService();
svc.get();
console.log(typeof svc);
