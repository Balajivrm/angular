function counter(count){
    return function inc(){//inc = increment
        count++;
console.log(count);
    }
};
var inc = counter(1);//function returns another function..this is also called higher order function
//console.log(typeof counter);//the proof of counter is function
//counter();
//counter();
//counter();//if we call multiple times the op value is changed
inc();
inc();
inc();
inc();
inc();
inc();


