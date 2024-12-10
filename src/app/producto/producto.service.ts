import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from '../models/producto.dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = "http://localhost:8080/api/productos/"

  constructor(private http: HttpClient) { }

  getAllProductos(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getProductoById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}id/${id}`);
  }

  getProductoByDescripcion(desc: string): Observable<any>{
    return this.http.get(`${this.baseUrl}desc/${desc}`);
  }

  postProducto(producto: producto): Observable<any>{
    return this.http.post(`${this.baseUrl}`, producto)
  }

  putProducto(producto: producto, id: number): Observable<any>{
    return this.http.put(`${this.baseUrl}${id}`, producto)
  }

  deleteProducto(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}${id}`)
  }
}
