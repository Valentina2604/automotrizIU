import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { productos } from '../model/productos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) {
    
  }

  registrar(datosProducto : productos){
    return this.http.post(`${environment.HOST}/registrarMercancia`, datosProducto);
  }

  listar(){
    return this.http.get<productos[]>(`${environment.HOST}/listarProductos`);
  }
}
