import { Component, OnInit } from '@angular/core';
import { gestionProducto } from 'src/app/models/modelgestionproducto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit{

  listaProductos: gestionProducto [] = [];
  cantidadProducto:any = 0;
  // botonQuitar = document.querySelector('#btnQuitar') as HTMLButtonElement;
  // botonAgregar = document.querySelector('#btnAgregar') as HTMLButtonElement;
  constructor(private _productoService:ProductosService){
  //   this.botonQuitar.addEventListener("click",() => {
  //     this.accionCarrito('quitar')
  // });

  // this.botonAgregar.addEventListener("click", () => {
  //     this.accionCarrito('agregar')
  // });

  }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listaProductos = data.filter((producto:any) => producto.categoria ==='gato' )

      // this.listaProductos[0].cantidad=0
      // console.log(this.listaProductos)


    }, error => console.log(error))
  }

  filtrarGato(gato: string, producto: any) {

  }

  agregarCantidad(index:number){
    if(this.listaProductos[index].cantidad){
      this.listaProductos[index].cantidad++
    } else{
      this.listaProductos[index].cantidad=1;
    }
  }

  quitarCantidad(index:number){
    if(this.listaProductos[index].cantidad && this.listaProductos[index].cantidad >0){
      this.listaProductos[index].cantidad--
    }
     }

  }




