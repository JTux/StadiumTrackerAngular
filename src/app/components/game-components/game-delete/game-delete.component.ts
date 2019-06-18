import { Component, OnInit } from '@angular/core';
import { GameDetail } from 'src/app/models/GameModels';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {

  game: GameDetail;

  constructor(private _gameService: GameService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._gameService.getGameByID(p.get('id')).subscribe((game: GameDetail) => {
        this.game = game;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._gameService.deleteGame(this.game.GameID).subscribe(() => {
      this._router.navigate(['/game']);
    });
  }
}
