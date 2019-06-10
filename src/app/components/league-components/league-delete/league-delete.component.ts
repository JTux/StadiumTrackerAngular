import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/services/league.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueDetail } from 'src/app/models/LeagueModels';

@Component({
  selector: 'app-league-delete',
  templateUrl: './league-delete.component.html',
  styleUrls: ['./league-delete.component.css']
})
export class LeagueDeleteComponent implements OnInit {

  league: LeagueDetail;

  constructor(private _leagueService: LeagueService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe(p => {
      this._leagueService.getLeagueByID(p.get('id')).subscribe((singleLeague: LeagueDetail) => {
        this.league = singleLeague;
      });
    });
  }

  ngOnInit() {
  }

  onDelete() {
    this._leagueService.deleteLeague(this.league.LeagueID).subscribe(() => {
      this._router.navigate(['/league']);
    });
  }
}
