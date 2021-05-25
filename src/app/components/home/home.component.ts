import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  loginPopup(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '340px',
      width: '300px',
    })
  };

  ngOnInit(): void {
  }

}
