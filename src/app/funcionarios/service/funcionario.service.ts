import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = 'api/funcionarios';

  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Funcionario[]>(this.API)
    .pipe(
      first(),
      tap(funcionarios => console.log(funcionarios))
    );
  }

  save(record: Partial<Funcionario>){

    if(record.funcionario_id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Funcionario>) {
    return this.httpClient.post<Funcionario>(this.API, record);
  }

  private update(record: Partial<Funcionario>) {
    return this.httpClient.put<Funcionario>(`${this.API}/${record.funcionario_id}`, record);
  }

  remove(funcionario_id: number){
    return this.httpClient.delete(`${this.API}/${funcionario_id}`);
  }

  loadById(funcionario_id: number ){
    return this.httpClient.get<Funcionario>(`${this.API}/${funcionario_id}`);
  }
}
