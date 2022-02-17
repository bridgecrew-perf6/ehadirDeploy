import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanguruPageRoutingModule } from './scanguru-routing.module';

import { ScanguruPage } from './scanguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanguruPageRoutingModule
  ],
  declarations: [ScanguruPage]
})
export class ScanguruPageModule {}
