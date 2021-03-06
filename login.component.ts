import { Component } from '@angular/core';

import { userService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    template:`<h1>Login</h1>
    

    <div class = "col-md-5">
    <div *ngIf="error" class ="alert alert-danger">Wrong username or password</div>
        <div class ="form-group">
        <input type="text" placeholder="Username" class="form-control" [(ngModel)]="user.username"/>
   
        </div>
    
        <div class ="form-group">
            <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
    
            </div>
    
        <div class="form-group">
            <button class="btn btn-success" (click)="onLogin()">Login</button>
            </div>
    </div>
    
    
    `
})


export class LoginComponent{

    user : any = {};
    
    error: boolean=false;

constructor(private UserSvc:userService,private router:Router){}

onLogin(){
    this.UserSvc.login(this.user)
    .subscribe(
        res=>{
            this.error=false;
            localStorage.setItem('token',res.token);
            this.router.navigate(["/products"]);
        
        },
            
        err=>{
            this.error=true
            });
}
    }
    
    
    
    
