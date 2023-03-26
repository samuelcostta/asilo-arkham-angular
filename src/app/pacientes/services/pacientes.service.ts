import { Injectable } from '@angular/core';

import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private httpClient : HttpClient) { }

  list(): Paciente[] {
    return[
      { _id: '1', name: 'Samuel lindao', gender: 'Masculino'}
    ];
  }
}
