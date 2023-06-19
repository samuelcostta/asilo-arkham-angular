import { Injectable } from '@angular/core';

import { Agenda } from '../model/agenda';
import { delay, tap } from 'rxjs/operators'
import { first } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private readonly API = 'api/agendas';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Agenda[]>(this.API)
    .pipe(
      first(),
      tap(agendas => console.log(agendas))
    );
  }

  save(record: Partial<Agenda>){
    //console.log(record);
    if(record.agenda_id){
      //console.log('update');
      return this.update(record);
    }
    //console.log('create')
    return this.create(record);
  }

  private create(record: Partial<Agenda>) {
    return this.httpClient.post<Agenda>(this.API, record);
  }

  private update(record: Partial<Agenda>) {
    return this.httpClient.put<Agenda>(`${this.API}/${record.agenda_id}`, record);
  }

  remove(agenda_id: number){
    return this.httpClient.delete(`${this.API}/${agenda_id}`);
  }
}
