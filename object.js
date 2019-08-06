//object literal

var mobile = {
    color: "red",
width:5,
height:10,

makeCall: function (number){
console.log("calling..",number);
},
    about : function () {
    console.log(this.color,this.width,this.height);

} 
};

//for reading
//console.log(mobile.color);//dot notation
//for overwrite
mobile.color = "blue";
console.log(mobile.color);


//bracket notation

var mobile = {
    color: "red",
width:5,
height:10,

makeCall: function (number){
console.log("calling..",number);
},
    about : function () {
    console.log(this.color,this.width,this.height);

} 
};

console.log(mobile["color"]);
mobile["makecall"](9789442312);