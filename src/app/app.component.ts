import{Component} from "@angular/core";
@Component({
    template:`<h1>Hello World</h1>
    <h1>{{result?"Passed":"Failed"}}</h1>

    <button [disabled]="!result">Enroll for course</button>
    <input type ='text' [value]='result'/>`,
    selector : 'app-root'
})
export class AppComponent{
private result : boolean = true;
}

