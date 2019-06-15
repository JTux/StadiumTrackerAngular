import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TeamDetail } from 'src/app/models/TeamModels';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  columnNames = ['logo', 'teamName', 'leagueName', 'buttons'];
  dataSource: MatTableDataSource<TeamDetail>;

  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.dataSource = new MatTableDataSource<TeamDetail>(teams);
    });
  }
}
