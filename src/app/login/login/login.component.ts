import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

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
    //console.log('oi')
    this.router.navigate(['/pacientes']);
  }
}

