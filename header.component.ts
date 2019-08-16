import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  "<header class="container">
  <nav class="navbar navbar-expand-lg bg-dark" >
  <h3 class ="navbar-brand">My Products app</h3>
<ul class ="navbar-nav mr-auto">
<li class ="nav-item"><a class="nav-link" routerLink="/">Home</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/about" >About</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/products" >Products</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/contact" >Contact</a><li>
</ul>
</nav>
</header>

  `
})
export class HeaderComponent {}


import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  "<header class="container">
  <nav class="navbar navbar-expand-lg bg-dark" >
  <h3 class ="navbar-brand">My Products app</h3>
<ul class ="navbar-nav mr-auto">
<li class ="nav-item"><a class="nav-link" routerLink="/">Home</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/about" >About</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/products" >Products</a><li>
<li class ="nav-item"><a class="nav-link" routerLink="/contact" >Contact</a><li>
</ul>
</nav>
</header>

  `
})
export class HeaderComponent {}



////////



//////adding routermodule in app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './userlist/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ConsoleLogger } from './services/console.logger';
import { FileLogger } from './services/file.logger';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{RouterModule, Route} from '@angular/router';


   
const ROUTES=[{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'products', component:ProductListComponent}];


@NgModule({

    imports:[BrowserModule,HttpClientModule,RouterModule.forRoot(ROUTES)],


    declarations:[AppComponent,HomeComponent,AboutComponent,ContactComponent,
        ProductListComponent,ProductComponent,UserListComponent, 
        HeaderComponent, FooterComponent],
    
        
        providers:[ProductService,{provide:ConsoleLogger,useClass:FileLogger}],
    
        bootstrap:[AppComponent],
})


export class AppModule{}



//////changes in app.component.ts


import { Component } from '@angular/core';



@Component({

    template:`
    <app-header>   </app-header>
    <main class="container">
    <router-outlet></router-outlet>
    <app-footer>`,
    selector :"app-root"
    
})

export class AppComponent{}
