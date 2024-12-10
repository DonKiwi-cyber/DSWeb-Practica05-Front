import { Component } from '@angular/core';
import { ProductoService } from './producto.service';
import { producto } from '../models/producto.dto';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { message } from '../models/message.dto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  id: number = 0
  descripcion: string = ""
  precio: number = 0
  stock: number = 0

  listaProductos: any[] = []

  constructor(private productoService: ProductoService){}

  postProducto(){
    const producto: producto = {
      descripcion: this.descripcion,
      precio: this.precio,
      stock: this.stock
    }
    this.productoService.postProducto(producto).subscribe(data => {
      console.log(data)
    })
    this.getAll()
  }

  getAll(){
    this.listaProductos = []
    this.productoService.getAllProductos().subscribe(data=>{
      data.array.forEach((element: any) => {
        this.listaProductos.push(element)
      });
    })
  }

  getOneById(){
    this.listaProductos = []
    this.productoService.getProductoById(this.id).subscribe(data=>{
      this.listaProductos.push(data)
    })
  }

  getOneByDescripcion(){
    this.listaProductos = []
    this.productoService.getProductoByDescripcion(this.descripcion).subscribe(data=>{
      this.listaProductos.push(data)
    })
  }

  updateProducto(){
    const producto: producto = {
      descripcion: this.descripcion,
      precio: this.precio,
      stock: this.stock
    }
    this.productoService.putProducto(producto, this.id).subscribe(data=>{
      console.log(data)
    })
    this.getAll()
  }

  deleteProducto(){
    this.productoService.deleteProducto(this.id).subscribe(data=>{
      console.log(data)
    })
    this.getAll()
  }
}
