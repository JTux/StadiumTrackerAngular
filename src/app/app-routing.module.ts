import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LeagueIndexComponent } from './components/league-components/league-index/league-index.component';
import { LeagueCreateComponent } from './components/league-components/league-create/league-create.component';
import { LeagueDetailComponent } from './components/league-components/league-detail/league-detail.component';
import { LeagueEditComponent } from './components/league-components/league-edit/league-edit.component';
import { LeagueDeleteComponent } from './components/league-components/league-delete/league-delete.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'league', children: [
      { path: '', component: LeagueIndexComponent },
      { path: 'create', component: LeagueCreateComponent },
      { path: 'details/:id', component: LeagueDetailComponent },
      { path: 'edit/:id', component: LeagueEditComponent },
      { path: 'delete/:id', component: LeagueDeleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
