import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './containers/pacientes/pacientes.component';
import { PacientesFormComponent } from './containers/paciente-form/pacientes-form.component';
import { PacienteResolver } from './guards/paciente.resolver';

const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: 'new', component: PacientesFormComponent, resolve: {paciente: PacienteResolver} },
  { path: 'edit/:id_paciente', component: PacientesFormComponent, resolve: {paciente: PacienteResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
