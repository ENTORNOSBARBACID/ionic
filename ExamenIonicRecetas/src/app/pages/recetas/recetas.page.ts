import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/servicios/contenido.service';
import {Meal} from "src/app/interfaz/icomida"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  standalone:false,
})
export class RecetasPage implements OnInit {

  receta:Meal[]=[];
  id:any;
  // numeros: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
    constructor(private contenido:ContenidoService, private route: ActivatedRoute,) { }
  
    ngOnInit() {
      this.contenido.getComida().subscribe((data)=>{
        data.meals.forEach((c)=>this.receta.push(c))
      })
      console.log(this.receta)
  
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id'); // 'id' es el nombre del parámetro en la ruta
        console.log('Parámetro recibido:', this.id);
      });
    }
  
  }
  