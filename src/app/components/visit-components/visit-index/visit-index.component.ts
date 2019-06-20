import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { VisitDetail } from 'src/app/models/VisitModels';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-visit-index',
  templateUrl: './visit-index.component.html',
  styleUrls: ['./visit-index.component.css']
})
export class VisitIndexComponent implements OnInit {

  columnNames = ['details', 'DateOfGame', 'Teams', 'Stadium', 'Visitor', 'TookPhoto', 'GotPin', 'buttons'];
  dataSource: MatTableDataSource<VisitDetail>;

  constructor(private _visitService: VisitService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._visitService.getVisits().subscribe((visits: VisitDetail[]) => {
      this.dataSource = new MatTableDataSource<VisitDetail>(visits);
      this.dataSource.sort = this.sort;
      console.log(visits);
    });
  }

}
