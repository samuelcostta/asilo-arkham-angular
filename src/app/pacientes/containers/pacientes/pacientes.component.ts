import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Paciente } from '../../model/paciente';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{

  pacientes$: Observable<Paciente[]> | null = null;

  //pacientesService: PacientesService;

  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {

    this.refresh();
  }

  refresh(){
    this.pacientes$ = this.pacientesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar pacientes.');
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
    //console.log('Oi');
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  onEdit(paciente: Paciente){
    this.router.navigate(['edit', paciente.id_paciente],{relativeTo: this.route})
  }

  onRemove(paciente: Paciente){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover este curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.pacientesService.remove(paciente.id_paciente).subscribe(
          ()=> {
            this.refresh
            this.snackBar.open('Paciente removido com sucesso', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}
