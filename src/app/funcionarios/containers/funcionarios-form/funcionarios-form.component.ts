import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Funcionario } from '../../model/funcionario';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.scss']
})
export class FuncionariosFormComponent {

  form = this.formBuilder.group({
    funcionario_id: [0],
    nome_funcionario: [''],
    cpf: [''],
    data_nascimento: [null],
    endereco: [''],
    telefone: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: FuncionarioService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const funcionario: Funcionario = this.route.snapshot.data['funcionario'];
    this.form.setValue({
      nome_funcionario: funcionario.nome_funcionario,
      cpf: funcionario.cpf,
      endereco: funcionario.endereco,
      telefone: funcionario.telefone,
      data_nascimento: funcionario.data_nascimento,
      funcionario_id: funcionario.funcionario_id
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
   }

   onCancel(){
     this.location.back();
   }

   private onError(){
     this.snackBar.open('Erro ao salvar funcionário.', '', { duration: 5000 });
   }

   private onSuccess(){
     this.snackBar.open('Tarefa salvo com sucesso', '', { duration: 5000 });
     this.onCancel();
   }

}
