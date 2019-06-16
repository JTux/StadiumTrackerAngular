import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadium-create',
  templateUrl: './stadium-create.component.html',
  styleUrls: ['./stadium-create.component.css']
})
export class StadiumCreateComponent implements OnInit {

  stadiumForm: FormGroup;

  constructor(private _stadiumService: StadiumService, private _formBuilder: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.stadiumForm = this._formBuilder.group({
      StadiumName: new FormControl,
      CityName: new FormControl,
      StateName: new FormControl
    });
  }

  onSubmit() {
    this._stadiumService.createStadium(this.stadiumForm.value).subscribe(() => {
      this._router.navigate(['/stadium']);
    });
  }
}
