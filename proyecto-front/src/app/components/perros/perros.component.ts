import { Component, OnInit } from '@angular/core';
import { gestionProducto } from 'src/app/models/modelgestionproducto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  listaProductos: gestionProducto[] = [];

  constructor(private _productoService: ProductosService){}

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listaProductos = data
    }, error => console.log(error))
  }
  filtrarPerro(perro: string, producto: any) {
    const myDocument: any = document.getElementById('document')
    if (perro == 'perro') {
      myDocument.innerHTML += `<div class='col-lg-4  col-sm-12'>
      <div class='card h-100'>
      <img src=${producto.url} class="card-img-top w-50 mt-3 rounded mx-auto d-block"
      alt="..."><br>
        <div class="card-body">
          <h6 class="card-title fs text-center">${producto.nombreProducto}</h6>
          <p class="precio text-center">${producto.precio}</p>


          <div class="input-group mb-3 px-5">
            <span class="input-group-text">-</span>
            <input type="text" class="form-control text-center" placeholder="0"
              aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">+</span>
          </div>
          <button type="button"
            class="btn text-white fw-bold w-50 boton1 d-flex justify-content-center align-items-center">Agregar</button>
        </div>

      </div>
    </div>`
    }
  }


}
