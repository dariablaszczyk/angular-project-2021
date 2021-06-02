import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../flight.interface';
import { MyDateFormatPipe } from '../../pipes/my-date-format.pipe';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  flightInfo: Flight | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.flightInfo = {
        journey: params.journey,
        departureDate: params.departureDate,
        returnDate: params.returnDate,
        originCity: params.originCity,
        destinationCity: params.destinationCity,
        passengers: params.passengers,
      };
      console.log(this.flightInfo);
    });
  }
}
