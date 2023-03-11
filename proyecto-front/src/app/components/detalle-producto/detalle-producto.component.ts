import { Component, OnInit } from '@angular/core';
import { gestionProducto } from 'src/app/models/modelgestionproducto';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

imgselecionada:string = 'assets/img/producto 1 perros.png';
arrayGaleria=[
  'assets/img/producto 1 perros.png',
  'assets/img/Producto-1-perros-imagen-1.png',
  'assets/img/Producto-1-perros-imagen-2.png'
];
cantidadProducto=1
precioProductoUnd=20000
precioTotal:number;
constructor(private _productoService: ProductosService ){
this.precioTotal= this.precioProductoUnd
}

selecionarImg(img:string){
  this.imgselecionada = img;
}

agregarProducto(){
this.cantidadProducto++
this.precioTotal= this.precioProductoUnd * this.cantidadProducto
}

removerProducto(){
if(this.cantidadProducto>1){
  this.cantidadProducto--
  this.precioTotal= this.precioProductoUnd * this.cantidadProducto
}
}





}
