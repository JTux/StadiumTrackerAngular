import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSortModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { AuthService } from './services/auth.service';
import { LeagueService } from './services/league.service';
import { TeamService } from './services/team.service';
import { AuthGuard } from './guards/auth.guard';
import { StadiumCreateComponent } from './components/stadium-components/stadium-create/stadium-create.component';
import { StadiumDetailComponent } from './components/stadium-components/stadium-detail/stadium-detail.component';
import { StadiumEditComponent } from './components/stadium-components/stadium-edit/stadium-edit.component';
import { StadiumDeleteComponent } from './components/stadium-components/stadium-delete/stadium-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LeagueIndexComponent,
    LeagueCreateComponent,
    LeagueDetailComponent,
    LeagueEditComponent,
    LeagueDeleteComponent,
    TeamIndexComponent,
    TeamCreateComponent,
    TeamDetailComponent,
    TeamEditComponent,
    TeamDeleteComponent,
    StadiumIndexComponent,
    StadiumCreateComponent,
    StadiumDetailComponent,
    StadiumEditComponent,
    StadiumDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    LeagueService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
