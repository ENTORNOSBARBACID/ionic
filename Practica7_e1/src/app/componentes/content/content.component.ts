import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone:false
})
export class ContentComponent  implements OnInit {
numero=0;
adivina = Math.floor(Math.random() * 100) + 1;
mensaje="";
  constructor() { }
  adivinar(){
    if(this.numero<this.adivina){
      this.mensaje="Mas grande palomo"
    }
    else if(this.numero>this.adivina){
      this.mensaje="Mas pequeño paleto"
    }
    else{
      this.mensaje="HAS ACERTADO!!!!!!"
    }
  }
  ngOnInit() {}

}
