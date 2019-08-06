var  x;
x= 10;
console.log(x);
console.log(typeof x);


var x = [1,2,3,4];
console.log(x);
console.log(typeof x);

var x;
x=10;
x="balaji";
x=true;
console.log(x);
console.log(typeof x);

var x;
x=null;
console.log(x);
console.log(typeof x);

var x= [1,2,3,4];
var y={};
console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);


function fun(){
    console.log("myfunction");

}
fun();
fun();

function add(a,b) {
    var c = a+b;
    console.log(c);
}
add(10,20);
add(20,30);


function add(a,b){

    var c = a+b;
    return c;
}
var result= add(10,90);
console.log(result);
