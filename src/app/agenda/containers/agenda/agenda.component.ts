import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Agenda } from '../../model/agenda';
import { AgendaService } from '../../service/agenda.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

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

  onAdd() {
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  onEdit(agenda: Agenda){
    this.router.navigate(['edit', agenda.agenda_id],{relativeTo: this.route})
  }

  onRemove(agenda: Agenda){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover este curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.agendaService.remove(agenda.agenda_id).subscribe(
          ()=> {
            this.snackBar.open('Paciente removido com sucesso', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            this.refresh()
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}
