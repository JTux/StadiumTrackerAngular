import { Component, OnInit } from '@angular/core';
import { TeamEdit } from 'src/app/models/TeamModels';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueDetail } from 'src/app/models/LeagueModels';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  team: TeamEdit;
  teamForm: FormGroup;
  leagues: LeagueDetail[];

  constructor(
    private _teamService: TeamService,
    private _leagueService: LeagueService,
    private _form: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {

    this._activatedRoute.paramMap.subscribe(p => {
      this._teamService.getTeamByID(p.get('id')).subscribe((team: TeamEdit) => {
        this.team = team;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.teamForm = this._form.group({
      TeamID: new FormControl(this.team.TeamID),
      TeamName: new FormControl(this.team.TeamName),
      LeagueID: new FormControl(this.team.LeagueID),
      ImageData: new FormControl(this.team.ImageData)
    });
    this._leagueService.getLeagues().subscribe((leagues: LeagueDetail[]) => {
      this.leagues = leagues
    });
  }

  onSubmit() {
    const updatedTeam: TeamEdit = {
      LeagueID: this.teamForm.value.LeagueID,
      TeamID: this.teamForm.value.TeamID,
      TeamName: this.teamForm.value.TeamName,
      ImageData: this.teamForm.value.ImageData
    };
    this._teamService.updateTeam(updatedTeam).subscribe(d => {
      this._router.navigate(['/team']);
    });
  }
}
