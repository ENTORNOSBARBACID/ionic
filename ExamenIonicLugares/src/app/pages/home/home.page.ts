import { Component, NgZone } from '@angular/core';
import { ContenidoService } from 'src/app/servicio/contenido.service';
import { ChangeDetectorRef } from '@angular/core';
import { RootObject, Source } from 'src/app/interface/ilugar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  sitio: Source[] = [];

  mostrar:string="";
  constructor(private lugar: ContenidoService, private ngZone:NgZone) {}
  
  ngOnInit() {
    this.lugar.getlugar().subscribe((datos) => {
      datos.autonomias.forEach((autonomia) => {
        this.sitio.push(autonomia.source);
      });
    });
    console.log("Hola");
    console.log(this.sitio);
  }

    cambiar(name:string){
      for(let item of this.sitio){
        if(item.name==name){
          item.seleccionado=true;
        }
      }
    }
    cerrar(name:string){
      for(let item of this.sitio){
        if(item.name==name){
          item.seleccionado=false;
        }
      }
    }


    // descripcion(name:string):void{
    //   this.ngZone.run(() => {
    //     if (this.mostrar === name) {
    //       this.mostrar = '';
    //     } else {
    //       this.mostrar = name;
    //     }
    //     console.log(this.mostrar);
    //     console.log(name);
    //   });
    // }
}
