import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadirguruPage } from './hadirguru.page';

const routes: Routes = [
  {
    path: '',
    component: HadirguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadirguruPageRoutingModule {}
