import { Component, OnInit } from '@angular/core';
import { GameDetail } from 'src/app/models/GameModels';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: GameDetail;

  constructor(private _gameService: GameService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._gameService.getGameByID(routeData.get('id')).subscribe((game: GameDetail) => {
        this.game = game;
      });
    });
  }
}
