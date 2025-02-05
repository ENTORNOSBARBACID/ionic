import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Page } from './page1/page1.page';
import { ComponentesModule } from '../componentes/componentes.module';
import { PageIzqPage } from './page-izq/page-izq.page';
import { PageDerPage } from './page-der/page-der.page';

@NgModule({
  declarations: [Page1Page, PageIzqPage, PageDerPage],
  imports: [CommonModule, ComponentesModule],
  exports: [Page1Page, PageIzqPage, PageDerPage],
})
export class PageModule {}
