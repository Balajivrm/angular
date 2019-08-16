import { NgModule } from '@angular/core';
import{RouterModule, Route} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductListComponent } from '../product-list/product-list.component';

const ROUTES=[{path:'', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'products', component:ProductListComponent},
{path:'**',component:HomeComponent}];

@NgModule({
imports:[ RouterModule.forRoot(ROUTES)],
exports :[RouterModule]
})

export class RoutingModule{}



/////app.module.ts



import { NgModule, Component } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UserListComponent } from './userlist/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceModule } from './services/ServiceModule';
import { RoutingModule } from './router/router.module';
   

@NgModule({

    imports:[BrowserModule,HttpClientModule,ServiceModule,RoutingModule],


    declarations:[AppComponent,HomeComponent,AboutComponent,ContactComponent,
        ProductListComponent,ProductComponent,UserListComponent, 
        HeaderComponent, FooterComponent],
    
        
        
        bootstrap:[AppComponent],
})


export class AppModule{}



