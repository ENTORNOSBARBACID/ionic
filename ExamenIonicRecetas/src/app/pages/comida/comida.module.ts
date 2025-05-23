import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaPageRoutingModule } from './comida-routing.module';

import { ComidaPage } from './comida.page';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ComidaPage]
})
export class ComidaPageModule {}
