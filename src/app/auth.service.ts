import { Injectable } from '@angular/core';
import users from './users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  error: boolean = false;

  constructor() {}

  login(userName: string, userPassword: string): boolean {
    console.log(users, userName, userPassword);
    if (
      users.some(
        (user) => user.name === userName && user.password === userPassword
      )
    ) {
      this.isLogged = true;
      localStorage.setItem('isLogged', 'true');
    } else {
      this.isLogged = false;
      this.error = true;
    }
    return this.isLogged;
  }

  isLoggedIn(): boolean {
    if (this.isLogged || localStorage.getItem('isLogged') === 'true') {
      return true;
    }
    return false;
  }
}
