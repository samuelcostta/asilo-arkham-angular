import { Paciente } from './../../model/paciente';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent implements OnInit {

  form = this.formBuilder.group({
    id_paciente: [0],
    nome_paciente: [''],
    cpf: [''],
    data_nascimento: [null],
    endereco: [''],
    email: [''],
    telefone: [''],
    data_cadastro: [null]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: PacientesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    const paciente: Paciente = this.route.snapshot.data['paciente'];
    this.form.setValue({
      nome_paciente: paciente.nome_paciente,
      cpf: paciente.cpf,
      data_nascimento: paciente.data_nascimento,
      endereco: paciente.endereco,
      email: paciente.email,
      telefone: paciente.telefone,
      data_cadastro: paciente.data_cadastro,
      id_paciente: paciente.id_paciente
    })
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
