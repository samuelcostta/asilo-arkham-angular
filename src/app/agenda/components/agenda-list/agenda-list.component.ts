import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Agenda } from '../../model/agenda';

@Component({
  selector: 'app-agenda-list',
  templateUrl:'./agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss']
})
export class AgendaListComponent {

  @Input() agendas: Agenda[] = [];
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

  onEdit(agenda: Agenda) {
    this.edit.emit(agenda);
  }

  onDelete(agenda: Agenda) {
    this.remove.emit(agenda);
  }
}
