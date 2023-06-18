import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Agenda } from '../model/agenda';
import { AgendaService } from './../service/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agendas$: Observable<Agenda[]> | null = null;

  constructor(
    private agendaService: AgendaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){

    this.agendas$ = this.agendaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar agenda.');
        return of([])
      })
    );

  }
  ngOnInit(): void {
  }

  refresh(){
    this.agendas$ = this.agendaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar agenda.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
