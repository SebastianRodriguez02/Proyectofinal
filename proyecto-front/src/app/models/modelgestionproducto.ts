export class gestionProducto{
  _id?: any;
nombreProducto: string;
precio:number;
categoria:string;
url:string;

constructor(nombreProducto:string, precio:number, categoria:string,url:string){
  this.nombreProducto = nombreProducto
  this.precio = precio
  this.categoria=categoria
  this.url = url

}
}


