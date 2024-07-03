import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: {username: string, password: string}){
    localStorage.setItem('user',JSON.stringify(user));
  }

  login(username: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return user.username === username && user.password === password
  }

  logout() {
    localStorage.removeItem('user')
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null
  }
}
