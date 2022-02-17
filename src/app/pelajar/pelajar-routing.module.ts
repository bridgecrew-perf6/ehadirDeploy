import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelajarPage } from './pelajar.page';

const routes: Routes = [
  {
    path: '',
    component: PelajarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelajarPageRoutingModule {}
