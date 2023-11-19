import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  constructor(private usersService: UsersService, private router: Router) {}

  login() {
    this.usersService.authenticate(this.email, this.password).subscribe({
      next: (user) => {
        if (user && user.id) {
          localStorage.setItem('first_name', user.first_name);
          localStorage.setItem('last_name', user.last_name);
          localStorage.setItem('user_id', user.id.toString());
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        alert('Credenciales incorrectas o error al iniciar sesión');
        console.error(err);
      }
    });
  }

}
