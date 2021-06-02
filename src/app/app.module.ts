import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/home/weather/weather.component';
import { DateComponent } from './components/home/date/date.component';
import { SearchComponent } from './components/home/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyDateFormatPipe } from './pipes/my-date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    DateComponent,
    SearchComponent,
    FooterComponent,
    LoginComponent,
    FlightDetailsComponent,
    FlightSummaryComponent,
    MyDateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
