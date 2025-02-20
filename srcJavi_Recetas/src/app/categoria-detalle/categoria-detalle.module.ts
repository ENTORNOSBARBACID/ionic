import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaDetallePageRoutingModule } from './categoria-detalle-routing.module';

import { CategoriaDetallePage } from './categoria-detalle.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaDetallePageRoutingModule, ComponentesModule
  ],
  declarations: [CategoriaDetallePage]
})
export class CategoriaDetallePageModule {}
