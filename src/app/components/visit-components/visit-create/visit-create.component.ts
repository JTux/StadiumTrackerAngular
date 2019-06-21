import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VisitorDetail } from 'src/app/models/VisitorModels';
import { GameDetail } from 'src/app/models/GameModels';
import { VisitService } from 'src/app/services/visit.service';
import { VisitorService } from 'src/app/services/visitor.service';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-create',
  templateUrl: './visit-create.component.html',
  styleUrls: ['./visit-create.component.css']
})
export class VisitCreateComponent implements OnInit {

  visitForm: FormGroup;
  visitors: VisitorDetail[];
  games: GameDetail[];

  constructor(
    private _visitService: VisitService,
    private _visitorService: VisitorService,
    private _gameService: GameService,
    private _form: FormBuilder,
    private _router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.visitForm = this._form.group({
      GotPin: new FormControl,
      TookPhoto: new FormControl,
      VisitorID: new FormControl,
      GameID: new FormControl
    });
    this._visitorService.getVisitors().subscribe((visitors: VisitorDetail[]) => {
      this.visitors = visitors;
    });
    this._gameService.getGames().subscribe((games: GameDetail[]) => {
      this.games = games;
    });
  }

  onSubit() {
    this._visitService.createVisit(this.visitForm.value).subscribe(() => {
      this._router.navigate(['/visit']);
    });
  }
}
