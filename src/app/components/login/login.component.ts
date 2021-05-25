import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(public auth: AuthService, public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginForm.controls.name.value,this.loginForm.controls.password.value);   
  }

  
}
