import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueDetail } from 'src/app/models/LeagueModels';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamForm: FormGroup;
  leagues: LeagueDetail[];

  constructor(private _teamService: TeamService, private _leagueService: LeagueService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.teamForm = this._form.group({
      TeamName: new FormControl,
      LeagueID: new FormControl
    });
    this._leagueService.getLeagues().subscribe((leagues: LeagueDetail[]) => { 
      this.leagues = leagues
    });
  }

  onSubmit() {
    this._teamService.createTeam(this.teamForm.value).subscribe(data => {
      this._router.navigate(['/team']);
    });
  }
}
