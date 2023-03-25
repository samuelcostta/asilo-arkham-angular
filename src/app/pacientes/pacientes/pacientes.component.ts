import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{

  pacientes: Paciente[] = [
    { _id: '1', name: 'Samuel lindao', gender: 'Masculino'}
  ];
  displayedColumns = ['name', 'gender'];

  constructor() {
    //this.pacientes = []
  }

  ngOnInit(): void {
  }
}
