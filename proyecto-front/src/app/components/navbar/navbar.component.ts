import { Component} from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  navForm: FormGroup;
  regexNumero = /^[0-9]+$/;
  nombreDeProducto:any;



  constructor(private fb: FormBuilder, private router: Router, private _registroservice:RegistroService) {
    this.navForm = this.fb.group ({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numero: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
      nombreMascota: ['', Validators.required],
      tipo: ['', Validators.required],
      contrasena: ['', Validators.required],
      retificacionContra: ['', Validators.required],

    })
   }


  iniciarSesion(){
    console.log(this.navForm);
    this._registroservice.postRegistro(this.navForm.value).subscribe(data=> {
      Swal.fire ({
        title: 'Exito!',
        text: 'Tu registro se ha realizado correctamente',
        icon: 'success',
        confirmButtonText: 'Vale'
      })
      return this.navForm.reset()
    })
  }
  llamarProducto(){
    console.log('clic en boton', this.nombreDeProducto)
  }
}



