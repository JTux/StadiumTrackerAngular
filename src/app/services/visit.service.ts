import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { VisitCreate, VisitEdit } from '../models/VisitModels';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private _http: HttpClient) { }

  createVisit(visit: VisitCreate) {
    return this._http.post(`${Api_Url}/visit`, visit, { headers: this.getHeaders() });
  }

  getVisits() {
    return this._http.get(`${Api_Url}/visit`, { headers: this.getHeaders() });
  }

  getVisitByID(id: string) {
    return this._http.get(`${Api_Url}/visit/${id}`, { headers: this.getHeaders() });
  }

  updateVisit(visit: VisitEdit) {
    return this._http.put(`${Api_Url}/visit`, visit, { headers: this.getHeaders() });
  }

  deleteVisit(id: number) {
    return this._http.delete(`${Api_Url}/visit/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
