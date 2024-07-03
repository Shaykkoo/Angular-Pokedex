import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)){
      console.log('Connexion réussie');
      this.loginFailed = false;
      this.router.navigate(['/']);
    } else {
      this.loginFailed = true;
    }
  }
}
