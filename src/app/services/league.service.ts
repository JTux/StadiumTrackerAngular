import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeagueCreate, LeagueEdit } from '../models/LeagueModels';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private _http: HttpClient) { }

  createLeague(league: LeagueCreate) {
    return this._http.post(`${Api_Url}/league`, league, { headers: this.getHeaders() });
  }

  getLeagues() {
    return this._http.get(`${Api_Url}/league`, { headers: this.getHeaders() });
  }

  getLeagueByID(id: string) {
    return this._http.get(`${Api_Url}/league/${id}`, { headers: this.getHeaders() });
  }

  updateLeague(league: LeagueEdit) {
    return this._http.put(`${Api_Url}/league`, league, { headers: this.getHeaders() });
  }

  deleteLeague(id: number) {
    return this._http.delete(`${Api_Url}/league/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
