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
      { path: 'create', component: StadiumCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
