import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { EnableSignaturesComponent } from './enable-signatures/enable-signatures.component';
import { AutomateSignaturesComponent } from './automate-signatures/automate-signatures.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    MyDocumentsComponent,
    SendDocumentsComponent,
    MyContactsComponent,
    EnableSignaturesComponent,
    AutomateSignaturesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,

    PagesComponent,
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
