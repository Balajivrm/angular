import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { ConsoleLogger } from './console.logger';
import { FileLogger } from './file.logger';
import { userService } from '../userlist/user.service';
@NgModule({
    providers: [ProductService,userService, { provide: ConsoleLogger, useClass: FileLogger }],


})
export class ServiceModule {


}
      
