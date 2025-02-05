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

@Component({
  selector: 'app-page-izq',
  templateUrl: './page-izq.page.html',
  styleUrls: ['./page-izq.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ComponentesModule],
})
export class PageIzqPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
