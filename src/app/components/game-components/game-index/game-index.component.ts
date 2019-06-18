import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { GameListItem } from 'src/app/models/GameModels';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.css']
})
export class GameIndexComponent implements OnInit {

  columnNames = ['details', 'DateOfGame', 'StadiumName', 'HomeTeamName', 'AwayTeamName', 'buttons'];
  dataSource: MatTableDataSource<GameListItem>;

  constructor(private _gameService: GameService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._gameService.getGames().subscribe((games: GameListItem[]) => {
      this.dataSource = new MatTableDataSource<GameListItem>(games);
      this.dataSource.sort = this.sort;
    })
  }

}
