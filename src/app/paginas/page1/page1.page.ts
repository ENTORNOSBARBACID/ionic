import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ilibro } from 'src/app/interfaz/ilibro';
import { ContenidoService } from 'src/app/services/contenido.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: false,
})
export class Page1Page implements OnInit {
  id: any;
  libros: Ilibro[] = [];
  ano_publicacion = 0;
  constructor(
    private route: ActivatedRoute,
    private servicio: ContenidoService
  ) {}
  ngOnInit() {
    this.servicio.getLibros().subscribe((datos) => {
      datos.forEach((a) => this.libros.push(a));
    });
    console.log(this.libros);

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); // 'id' es el nombre del parámetro en la ruta
      console.log('Parámetro recibido:', this.id);
    });
  }
}
