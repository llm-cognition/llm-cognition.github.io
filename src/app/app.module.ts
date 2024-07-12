import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CfpComponent } from './cfp/cfp.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { PapersComponent } from './papers/papers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OrganizersComponent,
    SpeakersComponent,
    ScheduleComponent,
    CfpComponent,
    SponsorsComponent,
    PapersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
