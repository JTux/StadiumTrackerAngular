import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StadiumTrackerAngular';
  year = new Date().getFullYear();
  isLoggedIn;

  constructor(private _authService: AuthService) { this.isLoggedIn = localStorage.getItem('id_token'); }

  onLogout(){
    this._authService.logout();
  }
}