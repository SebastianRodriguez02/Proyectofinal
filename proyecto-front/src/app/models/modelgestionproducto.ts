export class gestionProducto{
  _id?: any;
nombreProducto: string;
precio:number;
categoria:string;
url:string;
cantidad: number;
constructor(nombreProducto:string, precio:number, categoria:string,url:string,cantidad:number){
  this.nombreProducto = nombreProducto
  this.precio = precio
  this.categoria=categoria
  this.url = url
  this.cantidad = cantidad 

}
}



