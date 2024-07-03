import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({ username: this.username, password: this.password});
    console.log('Inscription réussie');
    this.router.navigate(['/login']);
  }
}
