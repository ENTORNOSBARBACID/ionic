import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriaDetalleComponenteComponent } from './componentes/categoria-detalle-componente/categoria-detalle-componente.component';
import { RecetasPage } from './recetas/recetas.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categoria-detalle-componente/:id',
    component: CategoriaDetalleComponenteComponent
  },
  {
    path: 'recetas/:id',  // La ruta con el parámetro idCategory
    loadChildren: () => import('./recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
