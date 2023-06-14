import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent implements OnInit {

  dataString: string = '2023-05-24';
  timestamp: number = Date.parse(this.dataString);

  form = this.formBuilder.group({
    nome_paciente: [''],
    cpf: [0],
    data_nascimento: [null],
    endereco: [''],
    email: [''],
    telefone: [0],
    data_cadastro: [null]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    //this.form
  }

  ngOnInit(): void {
    //this.form.value.nome_paciente = 'Samuel';
  }

  onSubmit(){
   this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao cadastrar paciente', '', { duration: 5000 });
  }

  private onSuccess(){
    this.snackBar.open('Paciente salvo com sucesso', '', { duration: 5000 });
    this.onCancel();
  }
}
