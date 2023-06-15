import { Component, Input } from '@angular/core';
import { Paciente } from '../model/paciente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.scss']
})
export class PacientesListComponent {

  @Input() pacientes: Paciente[] = [];

  readonly displayedColumns = ['id_paciente', 'nome_paciente', 'cpf', 'data_cadastro', 'telefone', 'data_nascimento', 'endereco', 'email', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

    }

    onAdd() {
      //console.log('Oi');
      this.router.navigate(['new'],{relativeTo: this.route})
    }


}
