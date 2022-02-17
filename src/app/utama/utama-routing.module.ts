import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtamaPage } from './utama.page';

const routes: Routes = [
  {
    path: '',
    component: UtamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtamaPageRoutingModule {}
