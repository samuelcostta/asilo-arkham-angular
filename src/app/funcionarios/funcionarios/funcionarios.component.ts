import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Funcionario } from '../model/funcionario';
import { FuncionarioService } from '../service/funcionario.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  funcionarios$: Observable<Funcionario[]> | null = null;

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ){

    this.funcionarios$ = this.funcionarioService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar funcionarios.');
        return of([])
      })
    );

  }
  ngOnInit(): void {
  }

  refresh(){
    this.funcionarios$ = this.funcionarioService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar funcionarios.');
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

  onEdit(funcionario: Funcionario){
    this.router.navigate(['edit', funcionario.funcionario_id],{relativeTo: this.route})
  }

  onRemove(funcionario: Funcionario){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover este curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.funcionarioService.remove(funcionario.funcionario_id).subscribe(
          ()=> {
            this.snackBar.open('Funcionario removido com sucesso', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            this.refresh()
          },
          () => this.onError('Erro ao tentar remover funcionario.')
        );
      }
    });
  }
}
