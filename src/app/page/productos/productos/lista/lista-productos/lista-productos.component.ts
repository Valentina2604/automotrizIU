import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/model/productos';
import { InventarioService } from 'src/app/service/inventario.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  lista!:productos[];
  productos! : productos[];

  constructor(private inventario: InventarioService) { }

  ngOnInit(): void {
    this.inventario.listar().subscribe((data)=>{
      this.lista=data;
    });
  }

}
