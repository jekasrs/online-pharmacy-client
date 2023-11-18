import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  isValid: boolean = true;

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.isValid = true;

      if (this.isValid) {
        // Navigate to the main page on successful login
        this.router.navigate(['/main']); // '/main' should be replaced with your actual main page route
      }

    } else {
      console.log('Please enter both username and password.');
      this.isValid = false;
    }
  }
}

//Добавь переменную isValid если false тогда подключи стили
