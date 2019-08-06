interface IuserService{
    save (data:any);
    delete(id:number);
    get();
    getById();
}

class userService implements IuserService{
save (data : any){

} 
delete(id:any){

}
get(){
    console.log("getting users");

}
getById(){

}
}
var svc = new userService();
svc.get();
console.log(typeof svc);