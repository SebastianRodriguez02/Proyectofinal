import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.navForm = this.fb.group ({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      nombremascota: ['', [Validators.required]],
      contraseñas: ['', [Validators.required]],
      confirmacioncontraseña: ['', [Validators.required]],

    })
   }

  ngOnInit(): void {
  }
  iniciarSesion(){
    console.log(this.navForm);
  }

}
