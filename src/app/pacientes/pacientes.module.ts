import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './containers/pacientes/pacientes.component';
import { PacientesFormComponent } from './containers/paciente-form/pacientes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';



@NgModule({
  declarations: [
    PacientesComponent,
    PacientesFormComponent,
    PacientesListComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class PacientesModule { }
