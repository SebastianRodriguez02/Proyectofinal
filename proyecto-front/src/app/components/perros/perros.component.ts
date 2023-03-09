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
      this.listaProductos = data.filter((producto:any) => producto.categoria ==='perro' )
    }, error => console.log(error))
  }
  filtrarPerro(perro: string, producto: any) {


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
