import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HadirguruPageRoutingModule } from './hadirguru-routing.module';

import { HadirguruPage } from './hadirguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadirguruPageRoutingModule
  ],
  declarations: [HadirguruPage]
})
export class HadirguruPageModule {}
