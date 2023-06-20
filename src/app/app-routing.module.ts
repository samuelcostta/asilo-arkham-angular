import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'pacientes'},

  { path: '', pathMatch: 'full', redirectTo: 'login'},

  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
