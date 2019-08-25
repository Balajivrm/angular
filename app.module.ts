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
import { RoutingModule } from './router/routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TimePipe } from './services/time.pipe';
import { NewProductComponent } from './services/new-product/new-product.component';
import {FormsModule, ReactiveFormsModule, }from '@angular/forms';
import { RecativeFormComponent } from './reactive-form/reactive-form.component';
import { moreInfoComponent } from './moreInfo/moreInfo.component';
import { LoginComponent } from './userlist/login/login.component';

@NgModule({

    imports:[BrowserModule,HttpClientModule,ServiceModule,FormsModule,ReactiveFormsModule,ReactiveFormsModule,RoutingModule],


    declarations:[AppComponent,HomeComponent,AboutComponent,ContactComponent,
        ProductListComponent,ProductComponent,UserListComponent, 
        HeaderComponent, FooterComponent,ProductDetailComponent,TimePipe,NewProductComponent,RecativeFormComponent,moreInfoComponent,LoginComponent],
    
        
        
        bootstrap:[AppComponent],
})


export class AppModule{}
