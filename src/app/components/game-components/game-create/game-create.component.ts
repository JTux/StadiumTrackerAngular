import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import { TeamDetail } from 'src/app/models/TeamModels';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { TeamService } from 'src/app/services/team.service';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  gameForm: FormGroup;
  teams: TeamDetail[];
  stadiums: StadiumDetail[];

  constructor(
    private _gameService: GameService,
    private _teamService: TeamService,
    private _stadiumService: StadiumService,
    private _form: FormBuilder,
    private _router: Router) {

    this.createForm();
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.teams = teams;
    });
    this._stadiumService.getStadiums().subscribe((stadiums: StadiumDetail[]) => {
      this.stadiums = stadiums;
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.gameForm = this._form.group({
      DateOfGame: new FormControl,
      StadiumID: new FormControl,
      HomeTeamID: new FormControl,
      AwayTeamID: new FormControl,
      HomeTeamWon: new FormControl
    });
  }

  onSubmit() {
    this._gameService.createGame(this.gameForm.value).subscribe(() => {
      this._router.navigate(['/game']);
    });
  }
}
