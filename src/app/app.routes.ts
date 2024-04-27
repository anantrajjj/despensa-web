import {Routes} from '@angular/router';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {ShoppingListComponent} from './modules/shopping-list/pages/shopping-list/shopping-list.component';

export const routes: Routes = [

  {
    path: 'shopping-list/:id',
    component: ShoppingListComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
