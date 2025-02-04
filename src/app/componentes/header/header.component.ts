import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:false

})
export class HeaderComponent  implements OnInit {
  segmentoSeleccionado = 'info';
  constructor() {

   }
   onSegmentChange() {
    console.log('Nuevo valor de segmentoSeleccionado:', this.segmentoSeleccionado);
  }

  ngOnInit() {

  }

}
