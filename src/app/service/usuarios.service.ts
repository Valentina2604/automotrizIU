import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http : HttpClient) { }

  listaUsuarios(){
    return this.http.get<usuarios[]>(`${environment.HOST}/listarUsuarios`)
  }
}
