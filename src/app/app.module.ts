import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CfpComponent } from './cfp/cfp.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OrganizersComponent,
    SpeakersComponent,
    ScheduleComponent,
    CfpComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
