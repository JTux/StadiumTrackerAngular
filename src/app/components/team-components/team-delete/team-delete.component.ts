import { Component, OnInit } from '@angular/core';
import { TeamDetail } from 'src/app/models/TeamModels';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {

  team: TeamDetail;

  constructor(private _teamService: TeamService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._teamService.getTeamByID(p.get('id')).subscribe((team: TeamDetail) => {
        this.team = team;
      });
    });
  }

  ngOnInit() {
  }

  onDelete(){
    this._teamService.deleteTeam(this.team.TeamID).subscribe(()=>{
      this._router.navigate(['/team']);
    });
  }
}
