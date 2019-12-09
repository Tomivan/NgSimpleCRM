import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material' 
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    ContactListComponent,
    ContactCreateComponent,
    ActivityListComponent,
    ActivityCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
