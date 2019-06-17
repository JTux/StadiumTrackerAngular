import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';
import { ActivatedRoute } from '@angular/router';
import { StadiumDetail } from 'src/app/models/StadiumModels';

@Component({
  selector: 'app-stadium-detail',
  templateUrl: './stadium-detail.component.html',
  styleUrls: ['./stadium-detail.component.css']
})
export class StadiumDetailComponent implements OnInit {

  stadium: StadiumDetail;

  constructor(private _stadiumService: StadiumService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData=>{
      this._stadiumService.getStadiumByID(routeData.get('id')).subscribe((stadium: StadiumDetail)=>{
        this.stadium = stadium;
      });
    });
  }
}
