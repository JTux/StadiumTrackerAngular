import { Component, OnInit, ViewChild } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { LeagueDetail } from 'src/app/models/LeagueModels';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-league-index',
  templateUrl: './league-index.component.html',
  styleUrls: ['./league-index.component.css']
})
export class LeagueIndexComponent implements OnInit {

  columnNames = ['details', 'LeagueName', 'buttons'];
  dataSource: MatTableDataSource<LeagueDetail>;

  constructor(private _leagueService: LeagueService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._leagueService.getLeagues().subscribe((leagues: LeagueDetail[]) => {
      this.dataSource = new MatTableDataSource<LeagueDetail>(leagues);
      this.dataSource.sort = this.sort;
    });
  }
}
