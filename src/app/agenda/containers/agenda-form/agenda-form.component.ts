import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Agenda } from '../../model/agenda';
import { AgendaService } from '../../service/agenda.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss']
})
export class AgendaFormComponent implements OnInit {

  form = this.formBuilder.group({
    agenda_id: [0],
    nome_paciente: [''],
    dia: [0],
    mes: [0],
    ano: [0],
    responsavel: [''],
    tarefa: [''],
    concluido: [false]
  });


  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AgendaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute){
  }

  ngOnInit(): void {
    const agenda: Agenda = this.route.snapshot.data['agenda'];
    this.form.setValue({
      nome_paciente: agenda.nome_paciente,
      responsavel: agenda.responsavel,
      dia: agenda.dia,
      mes: agenda.mes,
      ano: agenda.ano,
      tarefa: agenda.tarefa,
      concluido: agenda.concluido,
      agenda_id: agenda.agenda_id
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
   }

   onCancel(){
     this.location.back();
   }

   private onError(){
     this.snackBar.open('Erro ao cadastrar tarefa.', '', { duration: 5000 });
   }

   private onSuccess(){
     this.snackBar.open('Tarefa salvo com sucesso', '', { duration: 5000 });
     this.onCancel();
   }
}
