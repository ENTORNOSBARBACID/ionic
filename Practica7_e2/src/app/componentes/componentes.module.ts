import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports:[FooterComponent, HeaderComponent, ContentComponent]
})
export class ComponentesModule { }
