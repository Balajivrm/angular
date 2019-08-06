import{ NgModule } from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact.componenet';

@NgModule({
    imports: [BrowserModule],
declarations : [AppComponent,HomeComponent,],
bootstrap :[AppComponent]

})
export class AppModule{}
