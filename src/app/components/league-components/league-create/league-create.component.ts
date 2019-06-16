import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LeagueService } from 'src/app/services/league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-create',
  templateUrl: './league-create.component.html',
  styleUrls: ['./league-create.component.css']
})
export class LeagueCreateComponent implements OnInit {

  leagueForm: FormGroup;

  constructor(private _leagueService: LeagueService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.leagueForm = this._form.group({
      LeagueName: new FormControl
    });
  }

  onSubmit() {
    this._leagueService.createLeague(this.leagueForm.value).subscribe(data => {
      this._router.navigate(['/league']);
    });
  }
}
