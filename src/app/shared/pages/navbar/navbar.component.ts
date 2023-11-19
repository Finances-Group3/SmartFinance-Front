import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstName: string | null = '';
  lastName: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.firstName = localStorage.getItem('first_name');
    this.lastName = localStorage.getItem('last_name');
  }

  logout(): void {
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }

}
