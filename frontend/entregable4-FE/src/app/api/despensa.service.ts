import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Compra, Factura, Producto } from './model/api-model';
const URL = "https://integrador5arquitecturas.herokuapp.com";

let headers = new HttpHeaders({
  'Content-Type': 'application/json'});
let options = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class DespensaService {




  constructor(private http : HttpClient) { }

  public getAllProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(URL+"/producto");
  }

  public deleteProducto(id: number){
    return this.http.delete(URL+"/producto/"+id);
  }


  public getAllFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(URL+"/factura");
  }

  public getProductoMasVendido(): Observable<Producto>{
    return this.http.get<Producto>(URL+"/producto/producto-mas-vendido");
  }

  public addCompra(id: number, compra : Compra)  : Observable<Factura>{
    return this.http.post<Factura>(URL+"/factura/"+id+"/compra",compra).pipe();
  }

  public getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(URL+"/cliente");
  }

  public getTotalCliente(id: any): Observable<number>{
    return this.http.get<number>(URL+"/cliente/"+id+"/total");
  }

  public createProducto(producto : Producto): Observable<Producto>{
    return this.http.post<Producto>(URL+"/producto",producto).pipe();
  }

  public createCliente(cliente : Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(URL+"/cliente",cliente).pipe();
  }

  public createFactura(factura : Factura) : Observable<Factura>{
    console.log("entro al service");
    console.log(URL+"/factura");
    console.log(factura);
    return this.http.post<Factura>(URL+"/factura",factura,options).pipe();
  }

}
