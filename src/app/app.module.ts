import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdTableModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import{DataSource,CdkTableModule} from '@angular/cdk';
/* import {CdkTableModule} from '@angular/cdk'; */

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
 imports: [
    BrowserModule,
	MdTableModule,
	CdkTableModule,

	HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
