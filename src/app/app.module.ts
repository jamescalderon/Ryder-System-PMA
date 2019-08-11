import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { AkCardComponent } from './ak-card/ak-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProcessFlowComponent } from './process-flow/process-flow.component';
import { BusModelComponent } from './bus-model/bus-model.component';
import { ReferencesComponent } from './references/references.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AkCardComponent,
    WelcomeComponent,
    ProcessFlowComponent,
    BusModelComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
// data = data;
 }
