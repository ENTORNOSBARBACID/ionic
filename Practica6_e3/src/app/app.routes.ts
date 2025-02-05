import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page1',
    loadComponent: () =>
      import('./paginas/page1/page1.page').then((m) => m.Page1Page),
  },
  {
    path: '',
    redirectTo: 'page1',
    pathMatch: 'full',
  },
  {
    path: 'page1',
    loadComponent: () =>
      import('./paginas/page1/page1.page').then((m) => m.Page1Page),
  },
  {
    path: 'page-izq',
    loadComponent: () =>
      import('./paginas/page-izq/page-izq.page').then((m) => m.PageIzqPage),
  },
  {
    path: 'page-der',
    loadComponent: () =>
      import('./paginas/page-der/page-der.page').then((m) => m.PageDerPage),
  },
];
