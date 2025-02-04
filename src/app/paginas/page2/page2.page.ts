import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ComponentesModule,
    IonicModule
  ],
})
export class Page2Page implements OnInit {
  constructor() {}

  ngOnInit() {}
}
