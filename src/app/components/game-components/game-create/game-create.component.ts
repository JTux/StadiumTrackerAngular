import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import { TeamDetail } from 'src/app/models/TeamModels';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { TeamService } from 'src/app/services/team.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorDetail } from 'src/app/models/VisitorModels';
import { GameVisitor } from 'src/app/models/GameModels';

export class VisitorCreateModel {
  value: number;
  disabled: boolean;
  visitorID: number;
  gotPin: boolean;
  tookPhoto: boolean;

  constructor(value: number) {
    this.value = value;
    this.disabled = false;
  }
}

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  visitorCount = 0;
  visitors: VisitorCreateModel[];
  peopleList: VisitorDetail[];
  gameForm: FormGroup;
  teams: TeamDetail[];
  stadiums: StadiumDetail[];
  recordedVisitors: GameVisitor[];

  constructor(
    private _gameService: GameService,
    private _teamService: TeamService,
    private _visitorService: VisitorService,
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
    this._visitorService.getVisitors().subscribe((visitors: VisitorDetail[]) => {
      this.peopleList = visitors;
    });
    this.recordedVisitors = new Array();
    this.visitors = new Array();
  }

  ngOnInit() {
  }

  addVisitorField() {
    this.visitors.push(new VisitorCreateModel(this.visitorCount));
    this.visitorCount += 1;
  }

  removeVisitor(visitor) {
    let element = document.getElementById(`visitor${visitor.value}`);
    element.parentNode.parentNode.removeChild(element.parentElement);

    this.visitors.find(function (v) {
      return v.value == visitor.value;
    }).disabled = true;

    this.visitors.forEach(v => {
      let index = this.visitors.indexOf(v);
      if (v.disabled == true) {
        this.visitors.splice(index, 1);
        this.visitorCount -= 1;
      }
    });

    this.visitors.forEach(v => {
      let index = this.visitors.indexOf(v);
      v.value = index;
    });
  }

  createForm() {
    this.gameForm = this._form.group({
      DateOfGame: new FormControl,
      StadiumID: new FormControl,
      HomeTeamID: new FormControl,
      AwayTeamID: new FormControl,
      HomeTeamWon: new FormControl(false),
      Visitors: new FormControl
    });
  }

  onSubmit() {
    for(let boy of this.visitors) {
      let visitorID = (<HTMLSelectElement>document.getElementById(`vis${boy.value}`)).value;
      this.recordedVisitors.push({VisitorID: parseInt(visitorID), GotPin: boy.gotPin, TookPhoto: boy.tookPhoto});
    }
    this.gameForm.controls['Visitors'].setValue(this.recordedVisitors);

    this._gameService.createGame(this.gameForm.value).subscribe(() => {
      this._router.navigate(['/game']);
    });
    
    this.recordedVisitors = new Array();
  }
}
