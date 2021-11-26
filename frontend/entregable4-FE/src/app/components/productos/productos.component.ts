import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespensaService } from 'src/app/api/despensa.service';
import { Cliente, Compra, Producto } from 'src/app/api/model/api-model';
import { LocalService } from 'src/app/service/local.service';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos : Producto[] = [];
  displayedColumns: string[] = ['id', 'descripcion', 'precio', 'cantidad','actions', 'delete'];
  dataSource = this.productos;
  quantity : number = 10;

  constructor(private despensaService : DespensaService,
     private cart : LocalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.despensaService.getAllProducts().subscribe(producto =>{
      producto.forEach(p => p.cantidad = 0);
      this.productos = producto;
      this.dataSource = producto;
    });    
  }
  
  eliminarProduto(element: Producto){
    this.despensaService.deleteProducto(element.id!).subscribe(()=>{
      this.despensaService.getAllProducts().subscribe(producto =>{
        producto.forEach(p => p.cantidad = 0);
        this.productos = producto;
        this.dataSource = producto;
      }); 
    });
   
  }


  upQuantity(element : Producto) : void {
    element.cantidad!++;
  }

  downQuantity(element: Producto) : void {
    if(element.cantidad!>0)
    element.cantidad!--
  }
  addToCart(producto : Producto) : void {
    if(producto.cantidad!=0){
     this.cart.addToCart(producto);
     producto.cantidad = 0;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogProductoComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.despensaService.getAllProducts().subscribe(producto =>{
        producto.forEach(p => p.cantidad = 0);
        this.productos = producto;
        this.dataSource = producto;
      });   
    });
  }

}
