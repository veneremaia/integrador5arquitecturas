import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DespensaService } from 'src/app/api/despensa.service';
import { Cliente } from 'src/app/api/model/api-model';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.scss']
})
export class ClienteHomeComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nombre', 'total'];
  dataSource : Cliente[] =  [];

  constructor(private despensaService : DespensaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.despensaService.getAllClientes().subscribe(cliente =>{
      this.dataSource = cliente;
      this.dataSource.forEach(cliente =>{
        this.despensaService.getTotalCliente(cliente.id).subscribe(total =>{
          cliente.total = 0;
          if(total)
            cliente.total = total;
        })
      });
  
    });
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      let nombre : string = result;
      let cliente : Cliente = {
        "nombre": nombre
      }
      this.despensaService.createCliente(cliente).subscribe(
        resp=>{
          this.despensaService.getAllClientes().subscribe(res =>{
            this.dataSource = res;
            })
        }
      );
    
    });
  }
}
