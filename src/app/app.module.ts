import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/common/login/login.component';
import { VolregComponent } from './components/volunteer/volreg/volreg.component';
import { OrgregComponent } from './components/organizer/orgreg/orgreg.component';
import { SponregComponent } from './components/sponsorer/sponreg/sponreg.component';
import { VoldashboardComponent } from './components/volunteer/voldashboard/voldashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VolregComponent,
    OrgregComponent,
    SponregComponent,
    VoldashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
