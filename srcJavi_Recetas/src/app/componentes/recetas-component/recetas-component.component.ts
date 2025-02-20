import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Meal } from 'src/app/interfaces/IRecetas';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetas-component',
  templateUrl: './recetas-component.component.html',
  styleUrls: ['./recetas-component.component.scss'],
  standalone:false
})
export class RecetasComponentComponent  implements OnInit {
  title: string = "Meals";
  strCategory: any;
  recetas: Meal[] = [];
  noRecetas: boolean = false;  // Nueva propiedad para controlar si hay o no recetas

  constructor(private route: ActivatedRoute, private recetasService: RecetasService) { }

  ngOnInit() {
    this.strCategory = this.route.snapshot.paramMap.get('id'); // Obtén el parámetro de la ruta
    console.log('Category ID:', this.strCategory);  // Verifica que recibas el id

    this.recetasService.getRecetas().subscribe((data) => {
      this.recetas = data.meals.filter(m => m.strCategory == this.strCategory);
      console.log(this.recetas);  

      // Si no hay recetas, mostramos el mensaje
      this.noRecetas = this.recetas.length === 0;
    });
  }
}
