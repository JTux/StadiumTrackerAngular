import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = "https://localhost:44376/api";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private _http: HttpClient) { }

  getLeagues() {
    return this._http.get(`${Api_Url}/league`, { headers: this.getHeaders() });
  }

  getLeagueByID(id: number) {
    return this._http.get(`${Api_Url}/league/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
