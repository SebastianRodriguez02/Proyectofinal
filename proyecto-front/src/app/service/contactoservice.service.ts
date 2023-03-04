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

  postContacto(contacto:crearContacto):Observable<any> {
 return this.http.post(this.url+'/crear-contacto', contacto)
  }
}
