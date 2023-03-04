export class iniciarSesion{
  _id?: any;
  nombre:  string;
  apellido: string;
  correo: string;
  numero: number;
  nombreMascota: string;
  tipo: string;
  contrasena: string;
  retificacionContra:string;

  constructor(nombre: string, apellido:string, correo:string, numero:number, nombreMascota:string, tipo:string, contrasena:string, retificacionContra:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.numero = numero;
    this.nombreMascota = nombreMascota;
    this.tipo = tipo;
    this.contrasena = contrasena;
    this.retificacionContra = retificacionContra
  }
}
