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

  getProductos(): Observable<any>{
    return this.http.get(this.url+"/optener-productos")
  }

  postProducto(producto:gestionProducto):Observable<any> {
 return this.http.post(this.url+'/crear-producto', producto)
  }

  deleteProducto(id:string):Observable<any>{
    return this.http.delete(this.url+'/eliminar-producto/'+id)

  }
  getProducto(id:string | null):Observable<any>{
    return this.http.get(this.url+'/optener-producto/'+id)
  }
}
