import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-index',
  templateUrl: './stadium-index.component.html',
  styleUrls: ['./stadium-index.component.css']
})
export class StadiumIndexComponent implements OnInit {

  columnNames = ['details', 'StadiumName', 'CityName', 'StateName', 'buttons'];
  dataSource: MatTableDataSource<StadiumDetail>;
  stadiums: StadiumDetail[];

  constructor(private _stadiumService: StadiumService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._stadiumService.getStadiums().subscribe((stadiums: StadiumDetail[]) => {
      this.dataSource = new MatTableDataSource<StadiumDetail>(stadiums);
      this.dataSource.sort = this.sort;
    });
  }
}
