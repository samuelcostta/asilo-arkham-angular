import { Component, EventEmitter, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

  export class LoginComponent implements OnInit {
    username: string="";
    password: string="";
    error: string="";
    mostrarMenuEmitter = new EventEmitter<boolean>();

  form = this.formBuilder.group({
    id: [0],
    user: [''],
    password: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {


  }

  onEntrar() {
 // verificar se o usuário e a senha estão corretos
 if (this.username === "Maria" && this.password === "123", this.username === "Alencar" && this.password === "321") {
  this.mostrarMenuEmitter.emit(true);
  this.router.navigate(['/pacientes']);
} else {
  this.error = "Usuário ou senha incorretos.";
  this.mostrarMenuEmitter.emit(false);
}
}


    //console.log('oi')

  }
