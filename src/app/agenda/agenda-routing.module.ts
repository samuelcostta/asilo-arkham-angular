import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';

const routes: Routes = [
  { path: '', component: AgendaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
