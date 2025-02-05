import { Component } from '@angular/core';
import { ILenguajes } from '../interfaces/interfaz';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
lenguajes:ILenguajes[]=[];
selected:ILenguajes[]=[];
  constructor() {
    this.lenguajes=[
      {
        nombre:"Java",
        seleccionado:false,
        descripcion:"Java es un lenguaje de programación multiplataforma orientado a objetos que se ejecuta en miles de millones de dispositivos de todo el mundo. Sustenta aplicaciones, sistemas operativos de smartphones, software empresarial y muchos programas conocidos.",
      },
      {
        nombre:"C#",
        seleccionado:false,
        descripcion:"C# es un lenguaje de programación desarrollado por Microsoft, orientado a objetos, que ha sido diseñado para compilar diversas aplicaciones que se ejecutan en . NET Framework. Se trata de un lenguaje simple, eficaz y con seguridad de tipos ."
      },
      {
        nombre:"python",
        seleccionado:false,
        descripcion:"Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes."
      }

    ]
  }
  mostrar(){
    this.selected=[];
    for(let i of this.lenguajes){
      if(i.seleccionado){
        this.selected.push(i);
      }
    }
    return this.selected;
  }
}
