import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import {gestionProducto}from 'src/app/models/modelgestionproducto'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProductos: gestionProducto [] = [];

  constructor(private _productoService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }


  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listaProductos = data
    }, error => console.log(error))
  }

  eliminarProducto(id:any){
    Swal.fire({
      title: 'Esta seguro que desea eliminar el producto?',
      text: "Esta accion no sera reversible",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
  }).then((result) => {
      if (result.isConfirmed) {
          this._productoService.deleteProducto(id).subscribe(data => {
              Swal.fire({
                  icon: 'success',
                  title: 'Producto eliminado',
              })
              this.obtenerProductos()
          })

      }
  })
}
  }


