import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agenda } from 'src/app/agenda/model/agenda';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.scss']
})
export class FuncionariosListComponent {
  @Input() funcionarios: Funcionario[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    //console.log('Oi');
    this.add.emit(true);
  }

  onEdit(funcionario: Funcionario) {
    this.edit.emit(funcionario);
  }

  onDelete(funcionario: Funcionario) {
    this.remove.emit(funcionario);
  }
}
