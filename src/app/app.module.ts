import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {WrapperModule} from './collections/professional-notes/wrapper.module'

import {SampleAppModule} from './collections/samples/sampleapp.module'
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  

@NgModule({
  // for anything that we use in the template
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WrapperModule,
    SampleAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
