import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import users from './users.json'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  error: boolean = false;

  constructor(private router: Router) { }

  login(userName: string, userPassword: string) {
    console.log(users, userName, userPassword)
    if (users.some(user => user.name === userName && user.password === userPassword)) {
      this.isLogged = true;
      this.router.navigate(["/details"])
    }
    else {
      this.isLogged = false;
      this.error = true;
    } 
  }
  
}
