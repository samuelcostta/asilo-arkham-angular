import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './containers/agenda/agenda.component';

import { AgendaFormComponent } from './containers/agenda-form/agenda-form.component';
import { AgendaResolver } from './guards/agenda.resolver';

const routes: Routes = [
  { path: '', component: AgendaComponent },
  { path: 'new', component: AgendaFormComponent},
  { path: 'edit/:agenda_id', component: AgendaFormComponent, resolve: {agenda: AgendaResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
