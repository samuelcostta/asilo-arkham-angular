import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form.component';
import { AgendaComponent } from './containers/agenda/agenda.component';


@NgModule({
  declarations: [
    AgendaComponent,
    AgendaListComponent,
    AgendaFormComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
