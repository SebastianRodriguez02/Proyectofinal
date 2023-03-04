import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _registroservice:RegistroService) {
    this.navForm = this.fb.group ({

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      celular: ['', Validators.required],
      nombreMascota: ['', Validators.required],
      contrasena: ['', Validators.required],
      confirmacioncontrasena: ['', Validators.required],

    })
   }

  ngOnInit(): void {
  }
  iniciarSesion(){
    console.log(this.navForm);
    this._registroservice.postRegistro(this.navForm.value).subscribe(data=> {console.log("registro subido")})
  }
}
    // const REGISTRO: Registro = {
    //   nombre: this.navForm.get('nombre')?.value,
    //   apellido: this.navForm.get('apellido')?.value,
    //   correo:  this.navForm.get('correo')?.value,
    //   numero:  this.navForm.get('numero')?.value,
    //   nombreMascota: this.navForm.get('nombreMascosta')?.value,
    //   tipo:  this.navForm.get('tipo')?.value,
    //   contrasena: this.navForm.get('contrasena')?.value,
    //   retificacionContra: this.navForm.get('retificacionContra')?.value
    // }

    // console.log(REGISTRO)
    // this.router.navigate(['/']);
    // Swal.fire ({
    //   title: 'Exito!',
    //   text: 'El registro se creo correctamente',
    //   icon: 'success',
    //   confirmButtonText: 'Vale'
    // })


