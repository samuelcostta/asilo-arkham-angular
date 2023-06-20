import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Funcionario } from '../model/funcionario';
import { FuncionarioService } from '../service/funcionario.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioResolver implements Resolve<Funcionario> {

  constructor(private service: FuncionarioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Funcionario> {
    if (route.params && route.params['funcionario_id']) {
      return this.service.loadById(route.params['funcionario_id']);
    }
    return of({ funcionario_id: 0, nome_funcionario: '', data_nascimento: null, cpf: '', telefone: '', endereco: ''});
  }
}
