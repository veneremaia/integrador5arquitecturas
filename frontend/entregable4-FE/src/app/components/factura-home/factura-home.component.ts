import { Component, OnInit } from '@angular/core';
import { DespensaService } from 'src/app/api/despensa.service';
import { Factura, Producto } from 'src/app/api/model/api-model';

@Component({
  selector: 'app-factura-home',
  templateUrl: './factura-home.component.html',
  styleUrls: ['./factura-home.component.scss']
})
export class FacturaHomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cliente', 'fecha','total'];
  dataSource : Factura[] =  [];
  productoMasVendido! : Producto;
  constructor(private despensaService : DespensaService) { }

  ngOnInit(): void {
    this.despensaService.getAllFacturas().subscribe(facturas =>{
      this.dataSource = facturas;
    });
    this.despensaService.getProductoMasVendido().subscribe(producto =>{
      this.productoMasVendido = producto;
    })
  }

}
