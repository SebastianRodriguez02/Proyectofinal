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
  nombreDeProducto:any; 
  constructor(private fb: FormBuilder, private router: Router, private _registroservice:RegistroService) {
    this.navForm = this.fb.group ({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      numero: ['', Validators.required],
      nombreMascota: ['', Validators.required],
      tipo: ['', Validators.required],
      contrasena: ['', Validators.required],
      retificacionContra: ['', Validators.required],

    })
   }


  iniciarSesion(){
    console.log(this.navForm);
    this._registroservice.postRegistro(this.navForm.value).subscribe(data=> {console.log("registro subido")})
  }
  llamarProducto(){
    console.log('clic en boton', this.nombreDeProducto)
  }
}



