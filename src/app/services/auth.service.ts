import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject, observable } from 'rxjs';

const Api_Url = "https://localhost:44376";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  showLogout: boolean;

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('id_token')) {
      this.showLogout = true;
    }
  }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/token`, str).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.showLogout = true;
      this.isLoggedIn.next(true);
      this._router.navigate(['/']);
    });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.showLogout = false;
    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeaders() });
    this._router.navigate(['/login']);
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) {
      return new Observable(observer => observer.next(false));
    }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeaders() });
  }

  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
