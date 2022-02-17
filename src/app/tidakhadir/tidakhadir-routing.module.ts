import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TidakhadirPage } from './tidakhadir.page';

const routes: Routes = [
  {
    path: '',
    component: TidakhadirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TidakhadirPageRoutingModule {}
