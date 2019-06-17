import { Component, OnInit } from '@angular/core';
import { StadiumDetail } from 'src/app/models/StadiumModels';
import { StadiumService } from 'src/app/services/stadium.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium-delete',
  templateUrl: './stadium-delete.component.html',
  styleUrls: ['./stadium-delete.component.css']
})
export class StadiumDeleteComponent implements OnInit {

  stadium: StadiumDetail;

  constructor(
    private _stadiumService: StadiumService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._stadiumService.getStadiumByID(p.get('id')).subscribe((stadium: StadiumDetail) => {
        this.stadium = stadium;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._stadiumService.deleteStadium(this.stadium.StadiumID).subscribe(() => {
      this._router.navigate(['/stadium']);
    });
  }
}
