import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StadiumCreate, StadiumEdit } from '../models/StadiumModels';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor(private _http: HttpClient) { }

  createStadium(stadium: StadiumCreate) {
    return this._http.post(`${Api_Url}/stadium`, stadium, { headers: this.getHeaders() });
  }

  getStadiums() {
    return this._http.get(`${Api_Url}/stadium`, { headers: this.getHeaders() });
  }

  getStadiumByID(id: string) {
    return this._http.get(`${Api_Url}/stadium/${id}`, { headers: this.getHeaders() });
  }

  updateStadium(stadium: StadiumEdit) {
    return this._http.put(`${Api_Url}/stadium`, stadium, { headers: this.getHeaders() });
  }

  deleteStadium(id: number) {
    return this._http.delete(`${Api_Url}/stadium/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
