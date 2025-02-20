import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/ICategorias';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  standalone:false
})
export class CategoriasComponent  implements OnInit {

  categorias: Category[] = [];
  constructor(private servicio: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.servicio.getCategorias().subscribe((data) => {
        this.categorias=data.categories;
      });
  }

  // Navegar a la página de detalles con el idCategory
  verDetalles(idCategory: string) {
    alert("Has clickcado"+ idCategory);
    this.router.navigate(['categoria-detalle-componente', idCategory]);
  }

}
