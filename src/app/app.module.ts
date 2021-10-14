import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProductosComponent } from './page/productos/productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProductosComponent } from './page/productos/productos/lista/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
