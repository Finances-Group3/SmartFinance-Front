import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService<User> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://smart-finance-api.onrender.com';
  }

  authenticate(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.basePath}/users/${encodeURIComponent(email)}/${encodeURIComponent(password)}`);
  }
}
