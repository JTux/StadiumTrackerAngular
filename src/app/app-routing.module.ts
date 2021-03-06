import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LeagueIndexComponent } from './components/league-components/league-index/league-index.component';
import { LeagueCreateComponent } from './components/league-components/league-create/league-create.component';
import { LeagueDetailComponent } from './components/league-components/league-detail/league-detail.component';
import { LeagueEditComponent } from './components/league-components/league-edit/league-edit.component';
import { LeagueDeleteComponent } from './components/league-components/league-delete/league-delete.component';
import { TeamIndexComponent } from './components/team-components/team-index/team-index.component';
import { TeamCreateComponent } from './components/team-components/team-create/team-create.component';
import { TeamDetailComponent } from './components/team-components/team-detail/team-detail.component';
import { TeamEditComponent } from './components/team-components/team-edit/team-edit.component';
import { TeamDeleteComponent } from './components/team-components/team-delete/team-delete.component';
import { StadiumIndexComponent } from './components/stadium-components/stadium-index/stadium-index.component';
import { StadiumCreateComponent } from './components/stadium-components/stadium-create/stadium-create.component';
import { StadiumDetailComponent } from './components/stadium-components/stadium-detail/stadium-detail.component';
import { StadiumEditComponent } from './components/stadium-components/stadium-edit/stadium-edit.component';
import { StadiumDeleteComponent } from './components/stadium-components/stadium-delete/stadium-delete.component';
import { GameIndexComponent } from './components/game-components/game-index/game-index.component';
import { GameCreateComponent } from './components/game-components/game-create/game-create.component';
import { GameDetailComponent } from './components/game-components/game-detail/game-detail.component';
import { GameEditComponent } from './components/game-components/game-edit/game-edit.component';
import { GameDeleteComponent } from './components/game-components/game-delete/game-delete.component';
import { VisitorIndexComponent } from './components/visitor-components/visitor-index/visitor-index.component';
import { VisitorCreateComponent } from './components/visitor-components/visitor-create/visitor-create.component';
import { VisitIndexComponent } from './components/visit-components/visit-index/visit-index.component';
import { VisitCreateComponent } from './components/visit-components/visit-create/visit-create.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'league', canActivate: [AuthGuard], children: [
      { path: '', component: LeagueIndexComponent },
      { path: 'create', component: LeagueCreateComponent },
      { path: 'details/:id', component: LeagueDetailComponent },
      { path: 'edit/:id', component: LeagueEditComponent },
      { path: 'delete/:id', component: LeagueDeleteComponent }
    ]
  },
  {
    path: 'team', canActivate: [AuthGuard], children: [
      { path: '', component: TeamIndexComponent },
      { path: 'create', component: TeamCreateComponent },
      { path: 'details/:id', component: TeamDetailComponent },
      { path: 'edit/:id', component: TeamEditComponent },
      { path: 'delete/:id', component: TeamDeleteComponent }
    ]
  },
  {
    path: 'stadium', canActivate: [AuthGuard], children: [
      { path: '', component: StadiumIndexComponent },
      { path: 'create', component: StadiumCreateComponent },
      { path: 'details/:id', component: StadiumDetailComponent },
      { path: 'edit/:id', component: StadiumEditComponent },
      { path: 'delete/:id', component: StadiumDeleteComponent }
    ]
  },
  {
    path: 'game', canActivate: [AuthGuard], children: [
      { path: '', component: GameIndexComponent },
      { path: 'create', component: GameCreateComponent },
      { path: 'details/:id', component: GameDetailComponent },
      { path: 'edit/:id', component: GameEditComponent },
      { path: 'delete/:id', component: GameDeleteComponent }
    ]
  },
  {
    path: 'visitor', canActivate: [AuthGuard], children: [
      { path: '', component: VisitorIndexComponent },
      { path: 'create', component: VisitorCreateComponent }
    ]
  },
  {
    path: 'visit', canActivate: [AuthGuard], children: [
      { path: '', component: VisitIndexComponent },
      { path: 'create', component: VisitCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
