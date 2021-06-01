import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightSummaryComponent } from './components/flight-summary/flight-summary.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: FlightDetailsComponent },
  { path: 'summary', component: FlightSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
