import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperaturasPageRoutingModule } from './temperaturas-routing.module';

import { TemperaturasPage } from './temperaturas.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperaturasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [TemperaturasPage]
})
export class TemperaturasPageModule {}
