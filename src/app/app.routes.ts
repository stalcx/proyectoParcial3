import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'cocktails',
    loadComponent: () =>
      import('./cocktails-list/cocktails-list.page').then(m => m.CocktailsListPage)
  },
  {
    path: 'cocktail/:id',
    loadComponent: () =>
      import('./cocktail-detail/cocktail-detail.page').then(m => m.CocktailDetailPage)
  }
];
