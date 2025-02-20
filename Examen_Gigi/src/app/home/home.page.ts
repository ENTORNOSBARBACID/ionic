// home.page.ts
import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../servicios/temp.service';
import { Source, Autonomia } from '../interfaces/temperatura';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],standalone:false
})
export class HomePage implements OnInit {
  pageTitle = 'EXAMEN - FEBRERO';
  lautonomias: Source[] = [];
unaAutonomia: Source | null = null; 
  constructor(private temperatureService: TemperatureService) {}

  ngOnInit() {
    this.loadAutonomias();
    
  }

  loadAutonomias() {
    this.temperatureService.getAllData().subscribe(
      r=>{r.autonomias.forEach(element => { this.lautonomias.push(element.source)
        
      });
      
      this.lautonomias.forEach(e=>{e.visible=false})
  })
}

  showdetalles(autonomia : Source){
   
   autonomia
   .visible=true
  }
  closedetalles(autonomia : Source){
   
    autonomia
    .visible=false
   }



}