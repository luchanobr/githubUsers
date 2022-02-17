import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  fetchUser(user: string) {
    return this.http.get(this.baseUrl + user);
  }
}
