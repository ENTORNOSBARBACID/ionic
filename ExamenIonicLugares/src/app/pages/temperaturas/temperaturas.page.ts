import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/servicio/contenido.service';

import { RootObject, Source, Autonomia } from 'src/app/interface/ilugar';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.page.html',
  styleUrls: ['./temperaturas.page.scss'],
  standalone:false
})
export class TemperaturasPage implements OnInit {

  autonomia:Autonomia[]=[]

  constructor(private lugar:ContenidoService) { }

  ngOnInit() {
    this.lugar.getlugar().subscribe((datos)=>{
      datos.autonomias.forEach((i) => this.autonomia.push(i))
    });

    console.log(this.autonomia)
  }

}
