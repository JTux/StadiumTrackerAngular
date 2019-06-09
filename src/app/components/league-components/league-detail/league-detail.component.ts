import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueDetail } from 'src/app/models/LeagueModels';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  league: LeagueDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _leagueService: LeagueService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._leagueService.getLeagueByID(routeData.get('id')).subscribe((singleLeague: LeagueDetail) => {
        this.league = singleLeague;
      });
    });
  }
}
