import { Component } from '@angular/core';
import { ContenidoService } from 'src/app/servicio/contenido.service';
import { RootObject, Source } from 'src/app/interface/ilugar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  sitio: Source[] = [];
  constructor(private lugar: ContenidoService) {}
  ngonInit() {
    this.lugar.getlugar().subscribe((datos) => {
      datos.autonomias.forEach((autonomia) => {
        this.sitio.push(autonomia.source);
      });
    });
    console.log(this.sitio);
  }
}
