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
  MatSelectModule
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

import { AuthService } from './services/auth.service';
import { LeagueService } from './services/league.service';
import { AuthGuard } from './guards/auth.guard';

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
    TeamCreateComponent
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
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    LeagueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
