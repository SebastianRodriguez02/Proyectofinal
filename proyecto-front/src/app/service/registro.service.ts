import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iniciarSesion  } from '../models/modelregistro';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = 'http://localhost:4300/api'

  constructor(private http: HttpClient) {  }

  getRegistros(): Observable<any>{
    return this.http.get(this.url+'/obtener-registros')
  }

  postRegistro(registro:iniciarSesion):Observable<any> {
 return this.http.post(this.url+'/crear-registro', registro)
  }

  deleteRegistro(id:string):Observable<any>{
    return this.http.delete(this.url+'/eliminar-registro/'+id)

  }
  getRegistro(id:string | null):Observable<any>{
    return this.http.get(this.url+'/obtener-registro/'+id)
  }
  putRegistro(id:string, registro:iniciarSesion): Observable<any>{
    return this.http.put(this.url+'/actualizar-registro/'+id, registro)
  }
}
