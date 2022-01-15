import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AutomateSignaturesComponent } from './automate-signatures/automate-signatures.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { EnableSignaturesComponent } from './enable-signatures/enable-signatures.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'automatiza-firmas', component: AutomateSignaturesComponent },
            { path: 'mis-documentos', component: MyDocumentsComponent },
            { path: 'mis-contactos', component: MyContactsComponent },
            { path: 'enviar-documentos', component: SendDocumentsComponent },
            { path: 'habilita-firmas', component: EnableSignaturesComponent },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


