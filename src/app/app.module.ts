import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
