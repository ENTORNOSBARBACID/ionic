import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetalleComponenteComponent } from './categoria-detalle-componente/categoria-detalle-componente.component';
import { RecetasComponentComponent } from './recetas-component/recetas-component.component';



@NgModule({
  declarations: [CabeceraComponent, CategoriasComponent,CategoriaDetalleComponenteComponent, RecetasComponentComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    CabeceraComponent, CategoriasComponent, CategoriaDetalleComponenteComponent, RecetasComponentComponent
  ]
})
export class ComponentesModule { }
