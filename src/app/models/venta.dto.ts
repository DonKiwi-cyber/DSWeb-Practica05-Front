import { detalleVenta } from "./detalleVenta.dto"

export interface venta{
    idCliente: number,
    nombreCliente: string,
    correoCliente: string
    listaDetalles: detalleVenta[]
}