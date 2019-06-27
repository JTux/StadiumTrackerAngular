import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameCreate, GameEdit } from '../models/GameModels';
import { Api_Url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) { }

  createGame(game: GameCreate) {
    return this._http.post(`${Api_Url}/game`, game, { headers: this.getHeaders() });
  }

  getGames() {
    return this._http.get(`${Api_Url}/game`, { headers: this.getHeaders() });
  }

  getGameByID(id: string) {
    return this._http.get(`${Api_Url}/game/${id}`, { headers: this.getHeaders() });
  }

  updateGame(game: GameEdit) {
    return this._http.put(`${Api_Url}/game`, game, { headers: this.getHeaders() });
  }

  deleteGame(id: number) {
    return this._http.delete(`${Api_Url}/game/${id}`, { headers: this.getHeaders() });
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
