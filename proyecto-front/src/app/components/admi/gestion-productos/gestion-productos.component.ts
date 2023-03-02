import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent {
  tituloComponente: string = 'Crear'
  productoForm: FormGroup
  regexNumero = /^[0-9]+$/;

  constructor(private fb: FormBuilder, private _productoService: ProductosService) {
    this.productoForm = this.fb.group({
      nombreProducto: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
      categoria: ['', Validators.required],
      url: ['', Validators.required],

    })
  }
  enviarInformacion() {
    console.log(this.productoForm.value)
    this._productoService.postProducto(this.productoForm.value).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Producto creados',

      })

    }, error => {
      console.log(error)
    })
  }

}



