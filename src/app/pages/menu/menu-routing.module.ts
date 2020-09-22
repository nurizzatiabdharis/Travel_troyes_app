import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('../sign-in/sign-in.module').then( m => m.SignInPageModule)
      },
      {
        path: 'interactive',
        loadChildren: () => import('../interactive/interactive.module').then( m => m.InteractivePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
