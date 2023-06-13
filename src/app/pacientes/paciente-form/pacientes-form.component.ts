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
    private snackBar: MatSnackBar) {
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
   this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){
    console.log('dms');
  }

  onError(){
    this.snackBar.open('Erro ao cadastrar paciente', '', { duration: 5000 });
  }
}
