import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacientesService } from '../services/pacientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit{

  pacientes$: Observable<Paciente[]>;
  displayedColumns = ['name', 'gender'];

  //pacientesService: PacientesService;

  constructor(private pacientesService: PacientesService) {
    //this.pacientesService = new PacientesService();
    this.pacientes$ = this.pacientesService.list();
  }

  ngOnInit(): void {
  }
}
