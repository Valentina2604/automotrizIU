import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productos } from 'src/app/model/productos';
import { usuarios } from 'src/app/model/usuarios';
import { InventarioService } from 'src/app/service/inventario.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  identificacion!: number;
  nombreUsuarios!: String;
  nombreProducto!: string;
  cantidad!: string;
  fecha!:string;
  form!: FormGroup;
  listaNombres!: usuarios[];
  productos! : productos;
  usuarios!: usuarios;
  constructor(
    private inventario: InventarioService,
    private usuario : UsuariosService) { }
    
  registrarProducto():void{
    this.usuarios = new usuarios();
    this.productos = new productos();
    this.usuarios = this.form.value['usuario'];
    this.productos.idproducto = this.form.value['idproducto'];
    this.productos.usuario = this.usuarios;
    this.productos.nombre = this.form.value['nombre']
    this.productos.cantidad = this.form.value['cantidad'];
    this.productos.fecha = this.form.value['fecha'];
    console.log(this.productos);
    this.inventario.registrar(this.productos).subscribe((data)=>{
    });
    //this.inicializarVariables();
  }  

  

  inicializarVariables(){
    this.form=new FormGroup({
      idproducto: new FormControl(),
      usuario: new FormControl(''),
      nombre: new FormControl(''),      
      cantidad : new FormControl(),
      fecha : new FormControl('')
    });
  }


  ngOnInit(): void {
    this.usuario.listaUsuarios().subscribe((data)=>{
      this.listaNombres = data;
    });
    this.inicializarVariables();
  }
}
