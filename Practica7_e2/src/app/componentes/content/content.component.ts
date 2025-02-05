import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone:false
})
export class ContentComponent  implements OnInit {
numero=0;
adivina = Math.floor(Math.random() * 10) + 1;
mensaje="";
mostrar=false;
contador=0;
  constructor(private alertController: AlertController) { }
  adivinar(){
    if(this.numero<this.adivina){
      this.mensaje="Mas grande palomo";
    }
    else if(this.numero>this.adivina){
      this.mensaje="Mas pequeño paleto";
    }
    else{
      this.mensaje="Iguales";
      this.mostrar=true;
      this.alerta();
    }
    this.contador=this.contador+1;
  }
  async alerta(){
    const alert=await this.alertController.create({
      backdropDismiss:false,
      header:"ALERTA",
      subHeader:"ACERTASTE ACERTASTE",
      message:"CACHO PALOMO HAS MADAMADAFOKIN ACERTADO",
      buttons:["QUITATE YA COÑO"]
    });
    await alert.present();
  }
  resetear(){
    this.numero=0;
    this.adivina = Math.floor(Math.random() * 10) + 1;
    this.mensaje="";
    this.mostrar=false;
    this.contador=0;
  }
  ngOnInit() {}

}
