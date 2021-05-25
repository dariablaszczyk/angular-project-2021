import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  flightForm = new FormGroup({
    journey: new FormControl(''),
    start: new FormControl('', [Validators.required]),
    end: new FormControl(''),
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
  })
  
  journeyTypes = [
    {view: "One Way Journey", value: "oneway", checked: true},
    {view: "Two Way Journey", value: "twoways", checked: false}
  ];

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
