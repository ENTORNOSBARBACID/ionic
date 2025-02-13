import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilibro } from 'src/app/interfaz/ilibro';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone:false
})
export class Page1Page implements OnInit {
  id: any;
  libros:Ilibro[]=[];
  titulo="";
  autor="";
  portada="";
  sinopsis="";
  genero="";
  editorial="";
  ano_publicacion=0;
  constructor(private route:ActivatedRoute) { 
    this.libros = [
      {
        titulo: "La Bestia",
        autor: "Carmen Mola",
        portada: "https://i.blogs.es/aa76de/libro/1366_2000.jpg",
        sinopsis: "Un thriller que se desarrolla en el Madrid de la posguerra, lleno de misterio, tensión y secretos ocultos. La detective, que se enfrentará a una historia sombría, descubrirá verdades que cambiarán su vida.",
        genero: "Thriller, Misterio",
        editorial: "Penguin Random House",
        año_publicacion: 2020
      },
      {
        titulo: "El problema final",
        autor: "Arturo Pérez-Reverte",
        portada: "https://i.blogs.es/aa76de/libro/1366_2000.jpg",
        sinopsis: "La última investigación de los detectives de la historia de Arturo Pérez-Reverte. Un caso que pondrá a prueba su habilidad y su moralidad, mientras destapan secretos ocultos y oscuros en el mundo del espionaje.",
        genero: "Thriller, Suspense",
        editorial: "Alfaguara",
        año_publicacion: 2021
      },
      {
        titulo: "El cuco de cristal",
        autor: "Javier Castillo",
        portada: "https://i.blogs.es/aa76de/libro/1366_2000.jpg",
        sinopsis: "Un joven que se enfrenta a un asesinato no resuelto y busca respuestas mientras lidia con su propio pasado. Una historia de amor, misterio y secretos enterrados.",
        genero: "Thriller psicológico",
        editorial: "Suma de Letras",
        año_publicacion: 2019
      },
      {
        titulo: "Roma soy yo",
        autor: "Santiago Posteguillo",
        portada: "https://i.blogs.es/aa76de/libro/1366_2000.jpg",
        sinopsis: "Una mirada profunda a la Roma antigua a través de los ojos de sus personajes más relevantes, con una mezcla de ficción histórica y hechos verídicos que revelan la complejidad del Imperio Romano.",
        genero: "Ficción histórica",
        editorial: "Planeta",
        año_publicacion: 2020
      },
      {
        titulo: "Violeta",
        autor: "Isabel Allende",
        portada: "https://i.blogs.es/aa76de/libro/1366_2000.jpg",
        sinopsis: "La historia de Violeta, quien a través de su vida relata los cambios que han sucedido en su país y en el mundo, así como los giros inesperados de su propio destino, en una narración poderosa y emotiva.",
        genero: "Drama, Ficción literaria",
        editorial: "Penguin Random House",
        año_publicacion: 2022
      }
    ];
    
  }
  mostrar(){
    for(let i of this.libros){
      if(i.titulo==this.id){
        this.titulo=i.titulo;
        this.autor=i.autor;
        this.portada=i.portada;  
        this.sinopsis=i.sinopsis;
        this.genero=i.genero;
        this.editorial=i.editorial;
        this.ano_publicacion=i.año_publicacion;
      }
    }
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');  // 'id' es el nombre del parámetro en la ruta
      console.log('Parámetro recibido:', this.id);
})
  this.mostrar();
  }

}
