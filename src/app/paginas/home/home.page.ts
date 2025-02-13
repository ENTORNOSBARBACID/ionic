import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Ilibro } from 'src/app/interfaz/ilibro';
import { ContenidoService } from 'src/app/services/contenido.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  libros: Ilibro[] = [];
  seleccionado = '';
  buscar: string = '';
  constructor(
    private alert: AlertController,
    private servicio: ContenidoService
  ) {}

  ngOnInit(): void {
    this.servicio.getLibros().subscribe((datos) => {
      datos.forEach((a) => this.libros.push(a));
    });
    console.log(this.libros);
  }

  ordenar() {
    if (this.seleccionado == 'Titulo')
      this.libros.sort((a, b) => {
        return a['titulo'].localeCompare(b['titulo']);
      });
    if (this.seleccionado == 'Autor')
      this.libros.sort((a, b) => {
        return a['autor'].localeCompare(b['autor']);
      });
    if (this.seleccionado == 'Genero')
      this.libros.sort((a, b) => {
        return a['genero'].localeCompare(b['genero']);
      });
  }

  async mostrar() {
    const alert = await this.alert.create({
      header: 'Selecciona orden',
      inputs: [
        { type: 'radio', label: 'Titulo', value: 'Titulo' },
        { type: 'radio', label: 'Autor', value: 'Autor' },
        { type: 'radio', label: 'Genero', value: 'Genero' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'OK',
          handler: (data) => {
            this.seleccionado = data;
            this.ordenar();
          },
        },
      ],
    });
    await alert.present();
  }
}
