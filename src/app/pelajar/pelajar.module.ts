import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelajarPageRoutingModule } from './pelajar-routing.module';

import { PelajarPage } from './pelajar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelajarPageRoutingModule
  ],
  declarations: [PelajarPage]
})
export class PelajarPageModule {}
