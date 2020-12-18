import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigSideBarComponent } from './config-side-bar/config-side-bar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ComponentCommunicationService } from './services/component-communication.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfigSideBarComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,    
  ],
  providers: [
    DataService,
    ComponentCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
