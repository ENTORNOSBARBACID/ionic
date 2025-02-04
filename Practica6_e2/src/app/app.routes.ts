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
    path: 'page2',
    loadComponent: () =>
      import('../app/paginas/page2/page2.page').then((m) => m.Page2Page),
  }
];