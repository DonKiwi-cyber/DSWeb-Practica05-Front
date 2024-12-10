import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { venta } from '../models/venta.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private ventaUrl = 'http://localhost:8080/api/ventas/';
  private clienteUrl = 'http://localhost:8080/api/clientes/';
  private productoUrl = 'http://localhost:8080/api/productos/';

  constructor(private http: HttpClient) {}

  generarReporte(idVenta: number): Observable<Blob> {
    return this.http.get(`${this.ventaUrl}reporte/${idVenta}`, {
      responseType: 'blob',
    });
  }

  createVenta(venta: venta): Observable<any>{
    return this.http.post(`${this.ventaUrl}`, venta);
  }

  getVenta(): Observable<any>{
    return this.http.get(`${this.ventaUrl}`);
  }

  getProductoByDescripcion(descProducto: string): Observable<any>{
    return this.http.get(`${this.productoUrl}desc/${descProducto}`);
  }

  getProductoById(idProducto: number): Observable<any>{
    return this.http.get(`${this.productoUrl}id/${idProducto}`);
  }

  getClienteByNombre(nombreCliente: string): Observable<any>{
    return this.http.get(`${this.clienteUrl}nombre/${nombreCliente}`);
  }

  getClienteById(idCliente: number): Observable<any>{
    return this.http.get(`${this.clienteUrl}id/${idCliente}`);
  }
}
