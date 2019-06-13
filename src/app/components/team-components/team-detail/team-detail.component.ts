import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { TeamDetail } from 'src/app/models/TeamModels';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: TeamDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _teamService: TeamService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData=>{
      this._teamService.getTeamByID(routeData.get('id')).subscribe((singleTeam: TeamDetail)=>{
        this.team = singleTeam
      });
    });
  }
}
