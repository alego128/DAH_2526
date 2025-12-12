import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',  
    pathMatch: 'full', 
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'detalle',
    loadComponent: () => import('./pages/detalle/detalle.page').then( m => m.DetallePage)
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./ajustes/ajustes.page').then( m => m.AjustesPage)
  },
];
