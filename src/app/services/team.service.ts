import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamCreate, TeamEdit } from '../models/TeamModels';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http: HttpClient) { }

  createTeam(team: TeamCreate) {
    return this._http.post(`${Api_Url}/team`, team, { headers: this.getHeaders() });
  }

  getTeams() {
    return this._http.get(`${Api_Url}/team`, { headers: this.getHeaders() });
  }

  getTeamByID(id: string) {
    return this._http.get(`${Api_Url}/team/${id}`, { headers: this.getHeaders() });
  }

  updateTeam(team: TeamEdit) {
    return this._http.put(`${Api_Url}/team`, { headers: this.getHeaders() });
  }

  deleteTeam(id: string) {
    return this._http.delete(`${Api_Url}/team`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
