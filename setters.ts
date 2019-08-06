class person{
    name : string;
private _age : number;
    setAge(val : number){
        if(val<0||val>100)throw new Error("invalid age");
this._age = val;}

getAge(){
    return this._age;

}        

    }

var p = new person();
p.name = "balaji";
p.setAge(-20);

