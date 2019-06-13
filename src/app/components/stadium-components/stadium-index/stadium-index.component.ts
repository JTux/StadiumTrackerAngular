import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-index',
  templateUrl: './stadium-index.component.html',
  styleUrls: ['./stadium-index.component.css']
})
export class StadiumIndexComponent implements OnInit {

  columnNames = ['details', 'stadiumName', 'cityName', 'buttons'];
  dataSource: MatTableDataSource<StadiumDetail>;

  constructor(private _stadiumService: StadiumService) { }

  ngOnInit() {
    this._stadiumService.getStadiums().subscribe((stadiums: StadiumDetail[]) => {
      this.dataSource = new MatTableDataSource<StadiumDetail>(stadiums);
    });
  }
}
