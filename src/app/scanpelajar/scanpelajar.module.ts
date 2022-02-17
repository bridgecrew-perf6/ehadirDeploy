import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanpelajarPageRoutingModule } from './scanpelajar-routing.module';

import { ScanpelajarPage } from './scanpelajar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanpelajarPageRoutingModule
  ],
  declarations: [ScanpelajarPage]
})
export class ScanpelajarPageModule {}
