import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{

  pacientes$: Observable<Paciente[]>;
  displayedColumns = ['id_paciente', 'nome_paciente', 'cpf', 'data_cadastro', 'telefone', 'data_nascimento', 'endereco', 'email', 'actions'];

  //pacientesService: PacientesService;

  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog,
    private router: Router
    ) {

    //this.pacientesService = new PacientesService();
    this.pacientes$ = this.pacientesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    console.log("Oi");
    //this.router.navigate(['courses/new'])
  }
}
