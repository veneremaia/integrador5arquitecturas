import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { Cliente, Producto } from '../api/model/api-model';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private _cartList : Producto[] = [];

  private _cliente! : Cliente;

  cliente : BehaviorSubject<Cliente> = new BehaviorSubject(this._cliente);
  cartList : BehaviorSubject<Producto[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(producto: Producto) {
    let item : any = this._cartList.find(i=> i.descripcion==producto.descripcion);
    if(!item)
    // clona el objeto {...}
      this._cartList.push({...producto});
    else
      //se esta modificando el item del cartList
      item.cantidad+=producto.cantidad;

    console.log(this._cartList);
    // Actualizamos la variable observada
    this.cartList.next(this._cartList);
  }

  clear(){
    this._cartList =[];
    this.cartList.next(this._cartList);
  }
  setCliente(cliente : Cliente){
    this._cliente = cliente;
    console.log("Cleinte " + this._cliente.nombre)
    this.cliente.next({...this.cliente.value, ...this._cliente});
  }
}
