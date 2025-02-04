import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Page } from './page1/page1.page';
import { Page2Page } from './page2/page2.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Page1Page, Page2Page],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [Page1Page, Page2Page],
})
export class PaginasModule {}
