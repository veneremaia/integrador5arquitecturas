import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DespensaService } from 'src/app/api/despensa.service';
import { Cliente, Compra, Factura, Producto } from 'src/app/api/model/api-model';
import { LocalService } from 'src/app/service/local.service';
import { SnackErrorComponent } from '../productos/snack-error/snack-error.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  cartList$! : Producto[];
  total : number = 0; 
  cliente! : Cliente;
  factura!: Factura;
  clientes : Cliente[] = [];


  constructor(private cart: LocalService, private service : DespensaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cart.cartList.subscribe(res=>{
      this.cartList$ = res;
    });
    this.cart.cartList.forEach(element => {
      this.total =0;
      element.forEach(producto =>
        this.total+=producto.precio*producto.cantidad!)
    });
    this.service.getAllClientes().subscribe(cliente =>{
      this.clientes = cliente;
    });
  }

  selectCliente(cliente: Cliente){
    this.cliente= cliente;
  }

  crearFactura(){
      this.factura = {
        cliente: this.cliente,
        total: this.total,
        fecha:  new Date()
        ,
      }
      this.service.createFactura(this.factura).subscribe(res =>{
        this.factura = res;
        let compras : Compra[] = [];
        this.cartList$.forEach(producto =>{
          let p : Producto = {
            id: producto.id,
            descripcion: producto.descripcion,
            precio: producto.precio
          }
          let c : Compra = { 
            producto: p,
            cantidad: producto.cantidad!,
            factura: this.factura,
          }
          compras.push(Object.assign({},c))
        })
  
        compras.forEach(compra =>{
          this.service.addCompra(this.factura.id!,compra).subscribe();
      });
      this.cart.clear();
      this.openSnackBar()
      }, error => this.openError())

  }
  
  openError() {
    this._snackBar.openFromComponent(SnackErrorComponent, {
      duration: 5 * 1000,
    });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 5 * 1000,
    });
  }
}
