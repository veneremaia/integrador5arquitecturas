export interface Producto{
    id?: number;
    descripcion: string;
    precio: number;
    cantidad?: number;
}

export interface Cliente{
    id?: number;
    nombre: string;
    facturas? : Factura[];
    total?: number;
}

export interface Compra{
    id?: number;
    producto: Producto;
    cantidad: number;
    factura: Factura;
}

export interface Factura {
    id?: number;
    cliente: Cliente;
    total: number;
    fecha: Date;
    compras? : Compra[];
}
