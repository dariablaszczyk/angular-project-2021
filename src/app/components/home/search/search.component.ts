import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isSingleTicket: boolean = true;

  today = new Date(); 
  flightForm = new FormGroup({
    journey: new FormControl('oneWay'),
    departureDate: new FormControl([Validators.required]),
    returnDate: new FormControl(),
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
  })
  
  constructor(private router: Router) {
  }

  checkIfOneWay(event: any) {
    if (event.value === 'oneWay') this.isSingleTicket = true;
    else this.isSingleTicket = false;
  }
  

  ngOnInit(): void {
  }


}
