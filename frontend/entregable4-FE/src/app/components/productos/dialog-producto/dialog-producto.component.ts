import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DespensaService } from 'src/app/api/despensa.service';
import { Producto } from 'src/app/api/model/api-model';

@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.scss']
})
export class DialogProductoComponent implements OnInit {

  form = new FormGroup({
    descripcion: new FormControl(''),
    precio: new FormControl(''),
  });

  constructor(private service : DespensaService) { }

  ngOnInit(): void {
  }

  addProducto(){
    let p : Producto = {
      descripcion: this.form.value.descripcion,
      precio: this.form.value.precio 
    }
    this.service.createProducto(p).subscribe();
  }

}
