export class crearContacto{
  _id?: any;
  nombre:string;
  correo:string;
  numero:number;
  mensaje:string;

  constructor(nombre:string, correo:string, numero:number, mensaje: string){
   this.nombre = nombre
   this.correo = correo
   this.numero = numero
   this.mensaje = mensaje
  }
}
