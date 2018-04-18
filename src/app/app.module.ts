import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { AppPipe } from './app.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AppPipe,
   
  ],

  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
