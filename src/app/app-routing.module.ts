import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LeagueIndexComponent } from './components/league-components/league-index/league-index.component';
import { LeagueCreateComponent } from './components/league-components/league-create/league-create.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'league', children: [
      { path: '', component: LeagueIndexComponent },
      { path: 'create', component: LeagueCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
