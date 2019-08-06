class Baseclass{
    myBaseMethod(){
        console.log("MyBase Method");
    }
}

class Myclass extends  Baseclass{
    myProp : string;

    constructor (prop : string) {

    super();
    }
myMethod(){
    console.log("myMethod");

}
var mc = new MyClass("abcdef");
mc.myMethod();
mc.myBaseMethod();
