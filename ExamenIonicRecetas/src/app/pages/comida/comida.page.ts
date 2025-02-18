import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/servicios/contenido.service';
import {Category} from "src/app/interfaz/icategoria"
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
  standalone:false,
})
export class ComidaPage implements OnInit {
tipo:Category[]=[];
id:any;
  constructor(private contenido:ContenidoService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.contenido.getCategorias().subscribe((data)=>{
      data.categories.forEach((c)=>this.tipo.push(c))
    })

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); // 'id' es el nombre del parámetro en la ruta
      console.log('Parámetro recibido:', this.id);
    });
  }

}
