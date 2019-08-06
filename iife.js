//(function(){
    //var x= 10;
  //  console.log(x);



//})();// syntax

//(function iife(){
//var x=10;
//console.log(x);
//})();

function Mobile() {
    var call = function (number) {
        console.log("calling number");
    };
    var sendMsg = function (text) {
        console.log("sending",text);

    }
return{
    call: call,
    sendMsg: sendMsg

}
};
var m = Mobile();
m.call();
m.sendMsg();
