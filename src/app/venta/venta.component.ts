import { Component } from '@angular/core';
import { VentaService } from './venta.service';
import { detalleVenta } from '../models/detalleVenta.dto';
import { venta } from '../models/venta.dto';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { message } from '../models/message.dto';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {

  idCliente: number = 0;
  nombreCliente: string = ""
  correoCliente: string = ""

  idProducto: number = 0
  descProducto: string = ""
  cantidadProducto: number = 0

  listaDetalles: detalleVenta[] = []

  constructor(private ventaService: VentaService, private dialog: MatDialog) {}

  createReporte(id: number) {
    this.ventaService.generarReporte(id).subscribe((pdfBlob) => {
      const url = window.URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
    });
  }

  addProductoByDescripcion(){
    this.ventaService.getProductoByDescripcion(this.descProducto).subscribe(data=> {
      const detalleVenta: detalleVenta = {
        idProducto: data.id,
        descripcionProducto: data.descripcion,
        precioProducto: data.precio,
        cantidadProducto: this.cantidadProducto,
        total: this.getTotal(data.precioProducto)
      }
      this.listaDetalles.push(detalleVenta)
    })
  }

  addProductoById(){
    this.ventaService.getProductoById(this.idProducto).subscribe(data=> {
      const detalleVenta: detalleVenta = {
        idProducto: data.id,
        descripcionProducto: data.descripcion,
        precioProducto: data.precio,
        cantidadProducto: this.cantidadProducto,
        total: this.getTotal(data.precioProducto)
      }
      this.listaDetalles.push(detalleVenta)
    })
  }

  addClienteByNombre(){
    this.ventaService.getClienteByNombre(this.nombreCliente).subscribe(data=> {
      this.idCliente = data.id
      this.correoCliente = data.correo
    })
  }

  addClienteById(){
    this.ventaService.getClienteById(this.idCliente).subscribe(data=> {
      this.nombreCliente = data.nombre
      this.correoCliente = data.correo
    })
  }

  saveVenta(){
    const venta: venta = {
      idCliente: this.idCliente,
      nombreCliente: this.nombreCliente,
      correoCliente: this.correoCliente,
      listaDetalles: this.listaDetalles
    }
    this.ventaService.createVenta(venta).subscribe(data => {
      console.log(data)
      this.createReporte(venta.idCliente)
    })
  }

  getTotal(precio: number){
    return this.cantidadProducto * precio;
  }

  openDialog(message: message){
    this.dialog.open(DialogComponent, {
      data: { message }
    })
  }
}
