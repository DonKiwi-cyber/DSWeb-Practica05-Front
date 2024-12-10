import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../models/cliente.dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = "http://localhost:8080/api/clientes/"

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getClienteById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}id/${id}`);
  }

  getClienteByNombre(nombre: string): Observable<any>{
    return this.http.get(`${this.baseUrl}nombre/${nombre}`);
  }

  postCliente(cliente: cliente): Observable<any>{
    return this.http.post(`${this.baseUrl}`, cliente)
  }

  putCliente(cliente: cliente, id: number): Observable<any>{
    return this.http.put(`${this.baseUrl}${id}`, cliente)
  }

  deleteCliente(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}${id}`)
  }
}
