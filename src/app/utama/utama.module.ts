import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtamaPageRoutingModule } from './utama-routing.module';

import { UtamaPage } from './utama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtamaPageRoutingModule
  ],
  declarations: [UtamaPage]
})
export class UtamaPageModule {}
