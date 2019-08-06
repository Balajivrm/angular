class MyClass{
    MyProp : string;
    constructor(prop:string){
this.MyProp=prop;
console.log("executed");

    }
    myMethod(){
        console.log("mymethod");

    }
}

var mc=new MyClass("abcdef");
mc.myMethod();

