import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanpelajarPage } from './scanpelajar.page';

const routes: Routes = [
  {
    path: '',
    component: ScanpelajarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanpelajarPageRoutingModule {}
