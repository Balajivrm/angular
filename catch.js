function myfun(){
    try{
        var x = 1000;// to work catch function we need to change var x to let x
        throw new error('some error');

    }
    catch(e){
        console.log(x);

    }
}
myfun();
