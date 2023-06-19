import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Agenda } from '../model/agenda';
import { AgendaService } from '../service/agenda.service';



@Injectable({
  providedIn: 'root'
})
export class AgendaResolver implements Resolve<Agenda> {

  constructor(private service: AgendaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agenda> {
    if (route.params && route.params['agenda_id']) {
      return this.service.loadById(route.params['agenda_id']);
    }
    return of({ agenda_id: 0, responsavel: '', concluido: false, dia: 0, mes: 0, ano: 0, tarefa: '', nome_paciente: ''});
  }
}
