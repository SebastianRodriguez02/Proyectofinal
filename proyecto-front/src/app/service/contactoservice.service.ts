import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {crearContacto} from "../models/modeloContacto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url = 'http://localhost:4300/api'

  constructor(private http: HttpClient) {  }

  getContactos(): Observable<any>{
    return this.http.get(this.url+"/obtener-contactos")
  }

  postContacto(contacto:crearContacto):Observable<any> {
 return this.http.post(this.url+'/crear-contacto', contacto)
  }

  deleteContacto(id:string):Observable<any>{
    return this.http.delete(this.url+'/eliminar-contacto/'+id)

  }
  getContacto(id:string | null):Observable<any>{
    return this.http.get(this.url+'/obtener-contacto/'+id)
  }
  putContacto(id:string, contacto:crearContacto): Observable<any>{
    return this.http.put(this.url+'/actualizar-contacto/'+id, contacto)
  }
}
