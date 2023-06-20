import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';


@Injectable({
  providedIn: 'root'
})
export class PacienteResolver implements Resolve<Paciente> {

  constructor(private service: PacientesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
    if (route.params && route.params['id_paciente']) {
      return this.service.loadById(route.params['id_paciente']);
    }
    return of({ id_paciente: 0, nome_paciente: '', endereco: '', email: '', telefone: '', cpf: '', data_nascimento: null, data_cadastro: null });
  }
}
