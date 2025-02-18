import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Page } from './page1/page1.page';
import { HomePage } from './home/home.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [Page1Page, HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule
  ],
  exports:[Page1Page, HomePage]
})
export class PaginasModule { }
