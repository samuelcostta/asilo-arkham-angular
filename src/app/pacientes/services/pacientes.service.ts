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

  private readonly API = '/assets/pacientes.json';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Paciente[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      tap(pacientes => console.log(pacientes))
    );
  }
}
