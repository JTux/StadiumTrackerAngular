import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueDetail } from 'src/app/models/LeagueModels';
import { LeagueService } from 'src/app/services/league.service';
import { ImageUpload } from 'src/app/models/ImageUpload';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamForm: FormGroup;
  leagues: LeagueDetail[];
  selectedFile: ImageUpload;

  constructor(
    private _teamService: TeamService, 
    private _leagueService: LeagueService, 
    private _form: FormBuilder, 
    private _router: Router) {
      
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.teamForm = this._form.group({
      TeamName: new FormControl,
      LeagueID: new FormControl,
      ImageData: new FormControl
    });
    this._leagueService.getLeagues().subscribe((leagues: LeagueDetail[]) => { 
      this.leagues = leagues
    });
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageUpload(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.teamForm.controls['ImageData'].setValue(this.selectedFile.src);

    this._teamService.createTeam(this.teamForm.value).subscribe(data => {
      this._router.navigate(['/team']);
    });
  }
}
