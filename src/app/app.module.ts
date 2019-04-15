import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {myCust} from "./services/cust.services";
import {myCountries} from "./services/countries.services";
import { SeriesComponent } from './series/series.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,SeriesComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [myCust,myCountries],
  bootstrap: [SeriesComponent]
})
export class AppModule { }
