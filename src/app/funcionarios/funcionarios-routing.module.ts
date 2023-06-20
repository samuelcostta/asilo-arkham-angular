import { FuncionariosFormComponent } from './containers/funcionarios-form/funcionarios-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './containers/funcionarios/funcionarios.component';
import { FuncionarioResolver } from './guards/funcionario.resolver';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'new', component: FuncionariosFormComponent},
  { path: 'edit/:funcionario_id', component: FuncionariosFormComponent, resolve: {funcionario: FuncionarioResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
