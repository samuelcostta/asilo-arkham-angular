import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PacientesService } from '../services/pacientes.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      nome_paciente: [null],
      cpf: [null],
      data_nascimento: [null],
      endereco: [null],
      email: [null],
      telefone: [null],
      data_cadastro: [null]

    });
  }

  ngOnInit(): void {

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
