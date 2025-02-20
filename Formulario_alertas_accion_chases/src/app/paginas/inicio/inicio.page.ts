import { Component, OnInit } from '@angular/core';
import { Iitem } from '../interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone:false
})
export class InicioPage implements OnInit {
Registrar(): void {
  console.log(
this.usuario.controls.contra.value)
console.log(
this.usuario.controls.nombre.value)}
titulo:string="";
lista:Iitem[]=[];
usuario= new FormGroup({
  nombre:new FormControl('',[Validators.required]),
  contra:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])

});
  
constructor() {
 this.titulo="AlejandroForm";
this.lista=[
  {
    ruta:"/alerta",
    texto:"Alert",
    icono:"alert-circle-outline"
  },
  {
    ruta:"/accion",
    texto:"Action",
    icono:"magnet-outline"
  }
]

   }

  ngOnInit() {
  }

}
