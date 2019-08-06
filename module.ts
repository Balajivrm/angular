export class Calculator{
     public add( a:number, b: number): number {
        return a + b;

     }

    }
var calc = new Calculator();
var res= calc.add(10,20);
console.log(res);
