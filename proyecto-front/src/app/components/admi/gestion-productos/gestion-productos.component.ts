import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent {
  tituloComponente: string = 'Crear'
  productoForm: FormGroup
  regexNumero = /^[0-9]+$/;

  constructor (private fb: FormBuilder){
    this.productoForm = this.fb.group({
      nombreProducto: ['', Validators.required],
      precio:['',[Validators.required, Validators.pattern(this.regexNumero)]],
      categoria:['', Validators.required],
      url:['', Validators.required],

    })
  }
  enviarInformacion(){
    console.log (this.productoForm)
  }

}



