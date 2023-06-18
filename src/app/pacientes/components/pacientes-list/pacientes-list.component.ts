import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.scss']
})
export class PacientesListComponent {

  @Input() pacientes: Paciente[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);


  readonly displayedColumns = ['id_paciente', 'nome_paciente', 'cpf', 'data_cadastro', 'telefone', 'data_nascimento', 'endereco', 'email', 'actions'];

  constructor() { }

    ngOnInit(): void {
    }

    onAdd() {
      //console.log('Oi');
      this.add.emit(true);
    }

    onEdit(paciente: Paciente) {
      this.edit.emit(paciente);
    }

    onDelete(paciente: Paciente) {
      this.remove.emit(paciente);
    }
}
