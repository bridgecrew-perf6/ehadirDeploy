import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TidakhadirPageRoutingModule } from './tidakhadir-routing.module';

import { TidakhadirPage } from './tidakhadir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TidakhadirPageRoutingModule
  ],
  declarations: [TidakhadirPage]
})
export class TidakhadirPageModule {}
