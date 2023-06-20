import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../shared/app-material/app-material.module';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListComponent } from './funcionarios-list/funcionarios-list.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionariosFormComponent,
    FuncionariosListComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AppMaterialModule

  ]
})
export class FuncionariosModule { }
