import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../servicios/temp.service';
import { Provincia, Autonomia, Source } from '../interfaces/temperatura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.page.html',
  styleUrls: ['./temperaturas.page.scss'],
  standalone: false
})
export class TemperaturasPage implements OnInit {
  pageTitle = 'Temperaturas';
  nombre: string | null = null;
  lprovincias: Provincia[] = [];
  unaProvincia: Provincia | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private temperatureService: TemperatureService
  ) {}

  

  ngOnInit() {
    // Obtener el parámetro 'nombre' de la URL
    this.activatedRoute.paramMap.subscribe(params => {
      this.nombre = params.get('nombre'); // Recoge el parámetro 'nombre'
      if (this.nombre) {
        this.loadProvincias();
      }
    });
  }

  loadProvincias() {
    this.temperatureService.getAllData().subscribe(r => {
      r.autonomias.forEach(element => {
         if (element.source.name==this.nombre){
          element.provincias.forEach(p=>{this.lprovincias.push(p)})
         }
        });
      });
  }
}
