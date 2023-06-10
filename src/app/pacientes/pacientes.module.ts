import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesFormComponent } from './paciente-form/pacientes-form.component';



@NgModule({
  declarations: [
    PacientesComponent,
    PacientesFormComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PacientesModule { }
