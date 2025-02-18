import { Component } from '@angular/core';
import { ContenidoService } from 'src/app/servicios/contenido.service';
import {Category} from "src/app/interfaz/icategoria"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  tipo:Category[]=[];

  constructor(private comida:ContenidoService) {}
  
  ngOnInit(){
    this.comida.getCategorias().subscribe((data)=>{
      data.categories.forEach((c)=>this.tipo.push(c))
    })
    console.log(this.tipo);
  }

}
