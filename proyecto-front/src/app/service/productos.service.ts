import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {gestionProducto} from "../models/modelgestionproducto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = 'http://localhost:4300/api'

  constructor(private http: HttpClient) {  }

  postProducto(producto:gestionProducto):Observable<any> {
 return this.http.post(this.url+'/crear-producto', producto)
  }
}
