import { Component, OnInit } from '@angular/core';
import { isReturnDateRequired, areCitiesDifferent } from '../../../validators';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  flightForm: FormGroup;
  isSingleTicket: boolean = true;
  today: Date = new Date();
  cities = ['Warsaw', 'Tokyo', 'Miami'];
  journey: AbstractControl;
  departureDate: AbstractControl;
  returnDate: AbstractControl;
  originCity: AbstractControl;
  destinationCity: AbstractControl;
  passengers: AbstractControl;

  constructor(
    form: FormBuilder,
    public dialog: MatDialog,
    public router: Router
  ) {
    this.flightForm = form.group(
      {
        journey: 'oneWay',
        departureDate: this.today,
        returnDate: [null],
        originCity: [null, Validators.required],
        destinationCity: [null, Validators.required],
        passengers: 1,
      },
      { validators: [isReturnDateRequired, areCitiesDifferent] }
    );

    this.journey = this.flightForm.controls['journey'];
    this.departureDate = this.flightForm.controls['departureDate'];
    this.returnDate = this.flightForm.controls['returnDate'];
    this.originCity = this.flightForm.controls['originCity'];
    this.destinationCity = this.flightForm.controls['destinationCity'];
    this.passengers = this.flightForm.controls['passengers'];

    console.log(router);
  }

  checkIfOneWay(event: any) {
    if (event.value === 'oneWay') this.isSingleTicket = true;
    else this.isSingleTicket = false;
  }

  ngOnInit(): void {}

  onSubmit(value: any) {
    if (this.flightForm.valid) {
      const dialogRef = this.dialog.open(LoginComponent, {
        height: '340px',
        width: '300px',
        data: {
          onLogin: () => this.handleLogin(),
        },
      });
    }
    console.log(value);
  }

  handleLogin() {
    console.log(this.router);
    // this.dialog.close()
    this.router.navigate(['/details'], { queryParams: { order: 'popular' } });
  }
}
