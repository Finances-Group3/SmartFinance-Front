import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    id: 1,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    this.http.post('https://smart-finance-api.onrender.com/users', this.user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }
}
