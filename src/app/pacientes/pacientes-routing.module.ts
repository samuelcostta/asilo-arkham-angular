import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesFormComponent } from './paciente-form/pacientes-form.component';

const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: 'new', component: PacientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
