import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ContentComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [FooterComponent, HeaderComponent, ContentComponent],
})
export class ComponentesModule {}
