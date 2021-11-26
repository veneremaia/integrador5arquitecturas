import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeProductosComponent } from './components/home-productos/home-productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { ClienteHomeComponent } from './components/cliente-home/cliente-home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/cliente-home/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { FacturaHomeComponent } from './components/factura-home/factura-home.component';
import {MatCardModule} from '@angular/material/card';
import { DialogProductoComponent } from './components/productos/dialog-producto/dialog-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackErrorComponent } from './components/productos/snack-error/snack-error.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeProductosComponent,
    CarritoComponent,
    ClienteHomeComponent,
    DialogComponent,
    SnackbarComponent,
    FacturaHomeComponent,
    DialogProductoComponent,
    SnackErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
