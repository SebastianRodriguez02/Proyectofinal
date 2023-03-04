import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iniciarSesion } from '../models/modelregistro';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = 'http://localhost:4300/api'

  constructor(private http: HttpClient) {  }

  postRegistro(registro:iniciarSesion):Observable<any> {
 return this.http.post(this.url+'/crear-registro', registro)
  }
}
