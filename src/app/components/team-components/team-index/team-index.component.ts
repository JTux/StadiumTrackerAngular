import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TeamDetail } from 'src/app/models/TeamModels';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  columnNames = ['logo', 'TeamName', 'LeagueName', 'buttons'];
  dataSource: MatTableDataSource<TeamDetail>;

  constructor(private _teamService: TeamService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.dataSource = new MatTableDataSource<TeamDetail>(teams);
      this.dataSource.sort = this.sort;
    });
  }
}
