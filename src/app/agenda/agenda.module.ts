import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';


@NgModule({
  declarations: [
    AgendaComponent,
    AgendaListComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class AgendaModule { }
