import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paciente } from '../model/paciente';
import { tap } from 'rxjs/operators'
import { first } from 'rxjs/operators'
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly API = 'api/pacientes';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Paciente[]>(this.API)
    .pipe(
      first(),
      tap(pacientes => console.log(pacientes))
    );
  }

  loadById(id_paciente: Number ){
    return this.httpClient.get<Paciente>(`${this.API}/${id_paciente}`);
  }

  save(record: Partial<Paciente>){
    //console.log(record);
    if(record.id_paciente){
      //console.log('update');
      return this.update(record);
    }
    //console.log('create')
    return this.create(record);
  }

  private create(record: Partial<Paciente>) {
    return this.httpClient.post<Paciente>(this.API, record);
  }

  private update(record: Partial<Paciente>) {
    return this.httpClient.put<Paciente>(`${this.API}/${record.id_paciente}`, record);
  }

  remove(id_paciente: number){
    return this.httpClient.delete(`${this.API}/${id_paciente}`);
  }
}
