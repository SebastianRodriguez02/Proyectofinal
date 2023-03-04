import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-gestion-productos',
    templateUrl: './gestion-productos.component.html',
    styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
    tituloComponente: string = 'Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    id: string | null

    constructor(private fb: FormBuilder, private _productoService: ProductosService, private router: Router, private idRoute: ActivatedRoute) {
        this.productoForm = this.fb.group({
            nombreProducto: ['', Validators.required],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            categoria: ['', Validators.required],
            url: ['', Validators.required],

        })
        this.id = this.idRoute.snapshot.paramMap.get('id')

    }
    ngOnInit(): void {
        this.accionSolicitada()

    }

    enviarInformacion() {
        if (this.id == null){
          //crear producto
          this._productoService.postProducto(this.productoForm.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto creados',

            })
            this.router.navigate(['/listaproductos'])

        }, error => {
            console.log(error)
        })
        }else{
           // actualizar producto
         this._productoService.putProducto(this.id, this.productoForm.value).subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: 'Producto actualizado',

        })
        this.router.navigate(['/listaproductos'])
         }, error => {

      })
        }

    }
    accionSolicitada() {
        if (this.id !== null)
            this.tituloComponente = 'Modificar'
        this._productoService.getProducto(this.id).subscribe(data => {
            this.productoForm.setValue({
                nombreProducto: data.nombreProducto,
                precio: data.precio,
                categoria: data.categoria,
                url: data.url
            })
        })
    }
}




