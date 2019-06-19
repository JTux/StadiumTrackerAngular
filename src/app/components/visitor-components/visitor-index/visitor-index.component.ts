import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { VisitorDetail } from 'src/app/models/VisitorModels';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-visitor-index',
  templateUrl: './visitor-index.component.html',
  styleUrls: ['./visitor-index.component.css']
})
export class VisitorIndexComponent implements OnInit {

  columnNames = ['details', 'FullName', 'buttons'];
  dataSource: MatTableDataSource<VisitorDetail>;

  constructor(private _visitorService: VisitorService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this._visitorService.getVisitors().subscribe((visitors: VisitorDetail[]) => {
      this.dataSource = new MatTableDataSource<VisitorDetail>(visitors);
      this.dataSource.sort = this.sort;
    });
  }

}
