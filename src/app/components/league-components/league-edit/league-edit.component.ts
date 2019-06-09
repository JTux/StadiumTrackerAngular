import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueEdit, LeagueDetail } from 'src/app/models/LeagueModels';
import { format } from 'path';

@Component({
  selector: 'app-league-edit',
  templateUrl: './league-edit.component.html',
  styleUrls: ['./league-edit.component.css']
})
export class LeagueEditComponent implements OnInit {

  league: LeagueEdit;
  editLeagueForm: FormGroup;

  constructor(
    private _leagueService: LeagueService,
    private _form: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {

    this._activatedRoute.paramMap.subscribe(p => {
      this._leagueService.getLeagueByID(p.get('id')).subscribe((singleLeague: LeagueEdit) => {
        this.league = singleLeague;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editLeagueForm = this._form.group({
      LeagueID: new FormControl(this.league.LeagueID),
      LeagueName: new FormControl(this.league.LeagueName)
    });
  }

  onSubmit() {
    const updatedLeague: LeagueEdit = {
      LeagueID: this.editLeagueForm.value.LeagueID,
      LeagueName: this.editLeagueForm.value.LeagueName
    };
    this._leagueService.updateLeague(updatedLeague).subscribe(d => {
      this._router.navigate(['/league']);
    });
  }
}
