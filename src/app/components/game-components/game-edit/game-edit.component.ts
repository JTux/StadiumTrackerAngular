import { Component, OnInit } from '@angular/core';
import { GameEdit, GameDetail } from 'src/app/models/GameModels';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamDetail } from 'src/app/models/TeamModels';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { GameService } from 'src/app/services/game.service';
import { TeamService } from 'src/app/services/team.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  game: GameEdit;
  gameForm: FormGroup;
  teams: TeamDetail[];
  stadiums: StadiumDetail[];

  constructor(
    private _gameService: GameService,
    private _teamService: TeamService,
    private _stadiumService: StadiumService,
    private _form: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {

    this._activatedRoute.paramMap.subscribe(p => {
      this._gameService.getGameByID(p.get('id')).subscribe((game: GameDetail) => {
        this.game = new GameEdit(
          game.GameID,
          game.HomeTeam.TeamID,
          game.AwayTeam.TeamID,
          game.Stadium.StadiumID,
          game.HomeTeamWon,
          game.DateOfGame);
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.gameForm = this._form.group({
      GameID: new FormControl(this.game.GameID),
      DateOfGame: new FormControl(this.game.DateOfGame),
      StadiumID: new FormControl(this.game.StadiumID),
      HomeTeamID: new FormControl(this.game.HomeTeamID),
      AwayTeamID: new FormControl(this.game.AwayTeamID),
      HomeTeamWon: new FormControl(this.game.HomeTeamWon)
    });
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.teams = teams;
    });
    this._stadiumService.getStadiums().subscribe((stadiums: StadiumDetail[]) => {
      this.stadiums = stadiums;
    });
  }

  onSubmit() {
    const updatedGame: GameEdit = {
      GameID: this.gameForm.value.GameID,
      DateOfGame: this.gameForm.value.DateOfGame,
      HomeTeamID: this.gameForm.value.HomeTeamID,
      AwayTeamID: this.gameForm.value.AwayTeamID,
      StadiumID: this.gameForm.value.StadiumID,
      HomeTeamWon: this.gameForm.value.HomeTeamWon
    };
    this._gameService.updateGame(updatedGame).subscribe(() => {
      this._router.navigate(['/game']);
    });
  }
}
