import { Component, OnInit } from '@angular/core';
import { StadiumEdit } from 'src/app/models/StadiumModels';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stadium-edit',
  templateUrl: './stadium-edit.component.html',
  styleUrls: ['./stadium-edit.component.css']
})
export class StadiumEditComponent implements OnInit {

  stadium: StadiumEdit;
  stadiumForm: FormGroup;

  constructor(
    private _stadiumService: StadiumService,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._stadiumService.getStadiumByID(p.get('id')).subscribe((stadium: StadiumEdit) => {
        this.stadium = stadium;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.stadiumForm = this._formBuilder.group({
      StadiumID: new FormControl(this.stadium.StadiumID),
      StadiumName: new FormControl(this.stadium.StadiumName),
      CityName: new FormControl(this.stadium.CityName),
      StateName: new FormControl(this.stadium.StateName)
    });
  }

  onSubmit() {
    const updatedStadium: StadiumEdit = {
      StadiumID: this.stadiumForm.value.StadiumID,
      StadiumName: this.stadiumForm.value.StadiumName,
      CityName: this.stadiumForm.value.CityName,
      StateName: this.stadiumForm.value.StateName
    };
    this._stadiumService.updateStadium(updatedStadium).subscribe(() => {
      this._router.navigate(['/stadium']);
    });
  }
}
