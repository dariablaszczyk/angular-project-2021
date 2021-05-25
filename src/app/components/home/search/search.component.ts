import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  flightForm: FormGroup;
  isSingleTicket: boolean = true;
  today: Date = new Date(); 
  cities = ["Warsaw", "Tokyo", "Miami"];

  constructor(form: FormBuilder,public dialog: MatDialog) {
    this.flightForm = form.group({
      journey: 'oneWay',
      departureDate: this.today,
      returnDate: '',
      originCity: 'warsaw',
      destinationCity: 'tokyo',
      passengers: 1
    })
  }
  
  checkIfOneWay(event: any) {
    if (event.value === 'oneWay') this.isSingleTicket = true;
    else this.isSingleTicket = false;
  }
  
  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(value)
  }

  loginPopup(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '340px',
      width: '300px',
    })
  };


}
