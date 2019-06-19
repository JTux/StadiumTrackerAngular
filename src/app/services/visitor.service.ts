import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from 'src/environments/environment.prod';
import { VisitorCreate, VisitorEdit } from '../models/VisitorModels';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private _http: HttpClient) { }

  createVisitor(visitor: VisitorCreate) {
    return this._http.post(`${Api_Url}/visitor`, visitor, { headers: this.getHeaders() });
  }

  getVisitors() {
    return this._http.get(`${Api_Url}/visitor`, { headers: this.getHeaders() });
  }

  getVisitorByID(id: string) {
    return this._http.get(`${Api_Url}/visitor/${id}`, { headers: this.getHeaders() });
  }

  updateVisitor(visitor: VisitorEdit) {
    return this._http.put(`${Api_Url}/visitor`, visitor, { headers: this.getHeaders() });
  }

  deleteVisitor(id: number) {
    return this._http.delete(`${Api_Url}/visitor/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
