import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuruPage } from './guru.page';

const routes: Routes = [
  {
    path: '',
    component: GuruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuruPageRoutingModule {}
