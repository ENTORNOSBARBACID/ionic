import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/ICategorias';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-detalle-componente',
  templateUrl: './categoria-detalle-componente.component.html',
  styleUrls: ['./categoria-detalle-componente.component.scss'],
  standalone:false
})
export class CategoriaDetalleComponenteComponent  implements OnInit {

  categoria: Category | undefined;
  constructor(private route: ActivatedRoute, private servicio: CategoriaService, private router: Router) { }

  ngOnInit() {
    const idCategory = this.route.snapshot.paramMap.get('id');
    
    if (idCategory) {
      this.servicio.getCategorias().subscribe({
        next: (data) => {
          // Encuentra la categoría con el idCategory seleccionado
          this.categoria = data.categories.find(c => c.idCategory === idCategory);
        }
      });
    }
  }

  // Método para navegar a la página de recetas
  verRecetas(idCategory: string) {
    this.router.navigate(['/recetas', idCategory]);  // Redirige a /recetas con el idCategory
  }

}
