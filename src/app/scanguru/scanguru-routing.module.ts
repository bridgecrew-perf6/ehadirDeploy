import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanguruPage } from './scanguru.page';

const routes: Routes = [
  {
    path: '',
    component: ScanguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanguruPageRoutingModule {}
