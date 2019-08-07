import{Component} from "@angular/core";
@Component({
    template:`<h1>Hello World</h1>
    <h1>{{result?"Passed":"Failed"}}</h1>
<button (click)="onClick()" [disabled]="getResult()">Enroll for course</button>
    <input type ='text' [value]='result'/>

    <h1 [class.pink] ="count">{{count}}</h1>
    
<div [ngSwitch]="count">
<h1 *ngIf="count">NG If Demo</h1>
<h1 *ngSwitchCase="3">LOW</h1>
<h1 *ngSwitchCase="6">MEDIUM</h1>
<h1 *ngSwitchCase="9">HIGH</h1>
<h1 *ngSwitchDefault>AVERAGE</h1>
</div>

<input type ="text"(keyup)="onchange($event)"/>

<h1 [ngClass]="red">{{text}}</h1>


    <button (click) = "inc()">++</button>
    <button (click) = "dec()">--</button>`,
    
    selector : 'app-root'
})
export class AppComponent{
private result = true;
private count = 0;
private text="Hello"
//ngClass :string,array,object
//private cls: string[] = ['red', 'green'];
private cls: any = {
    red: this.count === 0,
    green: this.count >0
};



private onclick(){
    console.log("button clicked");
}
private onchange(evt){
    this.text=evt.target.value;
}


private inc(){
    this.count++;
}
private dec(){
    this.count--;
}
private getResult(){
return !this.result;
}
}
