import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractivePage } from './interactive.page';

const routes: Routes = [
  {
    path: '',
    component: InteractivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractivePageRoutingModule {}
