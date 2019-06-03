import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from '../design/design.module';
import { PhysicianAccountFormComponent } from './account-form/physician-account-form.component';
import { CreatePhysicianComponent } from './create/create-physician.component';
import { PhysicianDashboardComponent } from './dashboard/physician-dashboard.component';
import { DocumentComponent } from './document/document.component';
import { EditPhysicianComponent } from './edit/edit-physician.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { PipesModule } from '../pipes/pipes.module';
import { SignatureDialogComponent } from './signature-dialog/signature-dialog.component';

@NgModule({
  declarations: [
    EditPhysicianComponent,
    CreatePhysicianComponent,
    PhysicianDashboardComponent,
    PhysicianAccountFormComponent,
    DocumentComponent,
    SignatureDialogComponent,
  ],
  imports: [
    CommonModule,
    DesignModule,
    ReactiveFormsModule,
    SignaturePadModule,
    PipesModule
  ],
  entryComponents: [
    SignatureDialogComponent
  ]
})
export class PhysicianModule { }
