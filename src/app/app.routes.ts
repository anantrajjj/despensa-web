import {Routes} from '@angular/router';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {ShoppingListComponent} from './modules/shopping-list/pages/shopping-list/shopping-list.component';
import {
  AddProductsShoppingListComponent
} from './modules/shopping-list/pages/add-products-shopping-list/add-products-shopping-list.component';
import {LoginComponent} from './modules/auth/pages/login/login.component';

export const routes: Routes = [
  {
    path: 'shopping-list/:id/add-products',
    loadComponent: () => import('./modules/shopping-list/pages/add-products-shopping-list/add-products-shopping-list.component').then(m => m.AddProductsShoppingListComponent)
  },
  {
    path: 'shopping-list/:id',
    loadComponent: () => import('./modules/shopping-list/pages/shopping-list/shopping-list.component').then(m => m.ShoppingListComponent)
  },
  {
    path: 'shopping-list',
    loadComponent: () => import('./modules/shopping-list/pages/shopping-list/shopping-list.component').then(m => m.ShoppingListComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home/home.component').then(m => m.HomeComponent)
  }
];
